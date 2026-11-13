const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const COOKIE_NAME = IS_PRODUCTION ? '__Host-skye_admin' : 'skye_admin';
const SESSION_TTL_MS = 2 * 60 * 60 * 1000;

function jwtSecret() {
  const secret = process.env.JWT_SECRET || '';
  if (secret.length < 32) {
    throw new Error('JWT_SECRET must contain at least 32 characters');
  }
  return secret;
}

function parseCookies(header = '') {
  return header.split(';').reduce((cookies, part) => {
    const separator = part.indexOf('=');
    if (separator < 0) return cookies;
    const key = part.slice(0, separator).trim();
    const value = part.slice(separator + 1).trim();
    if (key) cookies[key] = decodeURIComponent(value);
    return cookies;
  }, {});
}

function cookieOptions() {
  return {
    httpOnly: true,
    secure: IS_PRODUCTION,
    sameSite: IS_PRODUCTION ? 'none' : 'lax',
    path: '/',
    maxAge: SESSION_TTL_MS,
  };
}

function createAdminSession() {
  const csrfToken = crypto.randomBytes(32).toString('base64url');
  const token = jwt.sign(
    { role: 'admin', csrf: csrfToken },
    jwtSecret(),
    {
      algorithm: 'HS256',
      audience: 'skye-admin',
      issuer: 'skye-api',
      subject: 'admin',
      expiresIn: '2h',
    }
  );
  return { token, csrfToken };
}

function setAdminCookie(res, token) {
  res.cookie(COOKIE_NAME, token, cookieOptions());
}

function clearAdminCookie(res) {
  const options = cookieOptions();
  delete options.maxAge;
  res.clearCookie(COOKIE_NAME, options);
}

function adminAuth(req, res, next) {
  const token = parseCookies(req.headers.cookie)[COOKIE_NAME];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const payload = jwt.verify(token, jwtSecret(), {
      algorithms: ['HS256'],
      audience: 'skye-admin',
      issuer: 'skye-api',
      subject: 'admin',
    });
    if (payload.role !== 'admin' || !payload.csrf) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.admin = payload;
    return next();
  } catch (err) {
    clearAdminCookie(res);
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}

function requireCsrf(req, res, next) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();

  const supplied = req.get('X-CSRF-Token') || '';
  const expected = req.admin?.csrf || '';
  const suppliedBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(expected);

  if (
    !supplied ||
    suppliedBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(suppliedBuffer, expectedBuffer)
  ) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  return next();
}

module.exports = {
  adminAuth,
  requireCsrf,
  createAdminSession,
  setAdminCookie,
  clearAdminCookie,
};
