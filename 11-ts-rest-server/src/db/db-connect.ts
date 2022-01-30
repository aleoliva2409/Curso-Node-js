import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';

dotenv.config()

const dbName = process.env.DB_NAME || ''
const dbUser = process.env.DB_USER || ''
const dbPassword = process.env.DB_PASSWORD
const host = process.env.DB_HOST

const db = new Sequelize(dbName, dbUser, dbPassword, {
  host,
  dialect: 'mysql',
  logging: false
})

export default db;
