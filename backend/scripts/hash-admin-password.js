const crypto = require('crypto');
const { promisify } = require('util');

const scrypt = promisify(crypto.scrypt);

async function main() {
  const password = process.argv[2];
  if (!password || password.length < 12) {
    console.error('Provide an admin password of at least 12 characters.');
    console.error('Usage: npm run hash-admin-password -- "your strong password"');
    process.exitCode = 1;
    return;
  }

  const salt = crypto.randomBytes(32);
  const hash = await scrypt(password, salt, 64);
  console.log(`scrypt$${salt.toString('base64url')}$${hash.toString('base64url')}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
