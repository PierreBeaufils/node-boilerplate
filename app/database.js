const { Pool } = require('pg');
let client;

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  client = new Pool({ connectionString: process.env.DATABASE_URL });
} else {
  client = new Pool();
}

module.exports = client;