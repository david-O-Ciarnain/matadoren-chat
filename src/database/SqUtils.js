import * as SQLite from "expo-sqlite";
import { User } from "../models/User";

const db = SQLite.openDatabase("matadoren.db");

export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY NOT NULL,
                email VARCHAR(50) NOT NULL,
                password VARCHAR(20) NOT NULL,
                username VARCHAR(50) NOT NULL,
                firstname VARCHAR(50) NOT NULL,
                lastname VARCHAR(50) NOT NULL
            )
            `,
        [],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
};

export const insert = (user) => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO user (
                  email,
                  password,
                  username,
                  firstname,
                  lastname
              )
              VALUES (?, ?, ?, ?, ?)
              `,
        [
          user.email,
          user.password,
          user.username,
          user.firstname,
          user.lastname,
        ],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
};

export const getTableInfo = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `pragma table_info("user")`,
        [],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
};
