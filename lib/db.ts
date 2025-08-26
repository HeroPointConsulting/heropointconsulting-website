/**
 * Simple SQLite database setup for user authentication
 */

import sqlite3 from 'sqlite3'
import path from 'path'
import fs from 'fs'

// Database file path
const DB_PATH = path.join(process.cwd(), 'data', 'app.db')

let db: sqlite3.Database | null = null

/**
 * Get database instance (singleton)
 */
export function getDb(): sqlite3.Database {
  if (!db) {
    // Ensure data directory exists
    const dataDir = path.dirname(DB_PATH)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    db = new sqlite3.Database(DB_PATH)
    
    // Enable foreign keys
    db.run('PRAGMA foreign_keys = ON')
    
    // Initialize schema
    initSchema()
  }
  
  return db
}

/**
 * Initialize database schema
 */
function initSchema() {
  if (!db) return

  // Create users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
  `)
}

/**
 * User interface
 */
export interface User {
  id: number
  email: string
  name: string
  created_at: string
  updated_at: string
}

/**
 * User with password (for internal use)
 */
export interface UserWithPassword extends User {
  password: string
}

/**
 * Create a new user
 */
export function createUser(email: string, hashedPassword: string, name: string): Promise<User> {
  return new Promise((resolve, reject) => {
    const database = getDb()
    
    const stmt = database.prepare(`
      INSERT INTO users (email, password, name)
      VALUES (?, ?, ?)
    `)
    
    stmt.run([email, hashedPassword, name], function(err) {
      if (err) {
        reject(err)
        return
      }
      
      // Get the created user
      getUserById(this.lastID).then(user => {
        if (!user) {
          reject(new Error('Failed to create user'))
        } else {
          resolve(user)
        }
      }).catch(reject)
    })
    
    stmt.finalize()
  })
}

/**
 * Get user by email (with password)
 */
export function getUserByEmailWithPassword(email: string): Promise<UserWithPassword | null> {
  return new Promise((resolve, reject) => {
    const database = getDb()
    
    database.get(
      `SELECT id, email, password, name, created_at, updated_at
       FROM users
       WHERE email = ?`,
      [email],
      (err, row) => {
        if (err) {
          reject(err)
        } else {
          resolve(row as UserWithPassword || null)
        }
      }
    )
  })
}

/**
 * Get user by email (without password)
 */
export function getUserByEmail(email: string): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const database = getDb()
    
    database.get(
      `SELECT id, email, name, created_at, updated_at
       FROM users
       WHERE email = ?`,
      [email],
      (err, row) => {
        if (err) {
          reject(err)
        } else {
          resolve(row as User || null)
        }
      }
    )
  })
}

/**
 * Get user by ID (without password)
 */
export function getUserById(id: number): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const database = getDb()
    
    database.get(
      `SELECT id, email, name, created_at, updated_at
       FROM users
       WHERE id = ?`,
      [id],
      (err, row) => {
        if (err) {
          reject(err)
        } else {
          resolve(row as User || null)
        }
      }
    )
  })
}

/**
 * Check if email already exists
 */
export function emailExists(email: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const database = getDb()
    
    database.get(
      `SELECT COUNT(*) as count
       FROM users
       WHERE email = ?`,
      [email],
      (err, row: { count: number } | undefined) => {
        if (err) {
          reject(err)
        } else {
          resolve(row ? row.count > 0 : false)
        }
      }
    )
  })
}

/**
 * Close database connection
 */
export function closeDb() {
  if (db) {
    db.close()
    db = null
  }
}