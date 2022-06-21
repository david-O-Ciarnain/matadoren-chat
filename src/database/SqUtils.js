import * as SQLite from "expo-sqlite";
import { User } from "../models/User";

const db = SQLite.openDatabase("matadoren.sqlite");

export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY NOT NULL,
                email VARCHAR(50) UNIQUE NOT NULL,
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

export const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `SELECT * FROM user
        WHERE email=?`,
        [email],
        (tx, res) =>
          resolve(
            res.rows._array.map(
              (user) =>
                new User(
                  user.email,
                  user.password,
                  user.username,
                  user.firstname,
                  user.lastname
                )
            )
          ),
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

export const dropTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `DROP TABLE IF EXISTS user`,
        [],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
};
