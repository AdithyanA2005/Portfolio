import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function setup() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set.");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    console.log("Creating redirects table...");
    await sql`
      CREATE TABLE IF NOT EXISTS redirects (
        name VARCHAR(255) PRIMARY KEY,
        target_url TEXT NOT NULL
      );
    `;
    console.log("Table created successfully.");

    console.log("Inserting initial data...");
    await sql`
      INSERT INTO redirects (name, target_url)
      VALUES 
        ('linkedin-ieee-id', 'https://www.youtube.com/watch?v=qj9mpeEbkoc'),
        ('linkedin', 'https://www.linkedin.com/in/iadithyana/'),
        ('github', 'https://github.com/AdithyanA2005'),
        ('x', 'https://x.com/iadithyana'),
        ('portfolio', 'https://adithyana.vercel.app')
      ON CONFLICT (name) DO UPDATE 
      SET target_url = EXCLUDED.target_url;
    `;
    console.log("Initial data inserted successfully.");
  } catch (error) {
    console.error("Setup failed:", error);
  }
}

setup();
