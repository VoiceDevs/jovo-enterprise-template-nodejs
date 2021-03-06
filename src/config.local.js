// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

// Read values from .env file for local only
require('dotenv').config();

module.exports = {
  db: {
    FileDb: {
      enabled: true,
      pathToFile: '../db/db.json',
    },
  },
};
