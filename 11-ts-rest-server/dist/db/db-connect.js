"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_NAME || '';
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const db = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host,
    dialect: 'mysql',
    logging: false
});
exports.default = db;
//# sourceMappingURL=db-connect.js.map