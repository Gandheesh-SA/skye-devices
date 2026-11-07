/**
 * Kept as a compatibility hook for older deployments. Commission records are
 * financial history and must not be deleted by a retention job.
 */
async function runCommissionCleanup() {
  console.log('[Cron Cleanup] Skipped: commission history is retained.');
  return { deleted: 0 };
}

function initCronJobs() {
  console.log('[Cron] Commission cleanup is disabled; records are retained.');
}

module.exports = { initCronJobs, runCommissionCleanup };
