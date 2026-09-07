const cron = require('node-cron');
const pool = require('../db/index');

/**
 * Retention rule: Commissions are deleted after the 5th of the following month.
 * E.g. June (2026-06) commissions are deleted on or after July 6th.
 *
 * Runs automatically on the 6th of every month at 00:00 UTC ('0 0 6 * *').
 */
async function runCommissionCleanup() {
  try {
    const now = new Date();
    const prevMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const cutoffPeriod = `${prevMonthDate.getFullYear()}-${String(prevMonthDate.getMonth() + 1).padStart(2, '0')}`;

    console.log(`[Cron Cleanup] Running commission cleanup for periods <= ${cutoffPeriod}...`);

    const res = await pool.query(
      'DELETE FROM commissions WHERE period_month <= $1',
      [cutoffPeriod]
    );

    console.log(`[Cron Cleanup] Cleaned up ${res.rowCount} expired commission records.`);
  } catch (err) {
    console.error('[Cron Cleanup] Error during commission cleanup:', err.message);
  }
}

function initCronJobs() {
  // Schedule: 00:00 on the 6th day of every month
  cron.schedule('0 0 6 * *', () => {
    runCommissionCleanup();
  });
  console.log('[Cron] Commission retention scheduler initialized (runs 6th of every month at 00:00).');
}

module.exports = { initCronJobs, runCommissionCleanup };
