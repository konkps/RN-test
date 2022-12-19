import Sqlite from 'react-native-sqlite-storage';
import { Post } from '../models/post';

Sqlite.enablePromise(false);
const database = Sqlite.openDatabase('my-app.db');
console.log({ database });

export function init() {

  console.log("INIT");
   return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS posts (
          id INTEGER PRIMARY KEY NOT NULL,
          user TEXT NOT NULL,
          text TEXT NOT NULL,
          timestamp INTEGER  NOT NULL
        )`,
        [],
        () => { resolve();
          console.log("RES");},
        (_, error) => { reject(error);
          console.log({ error });}
      );
    });
  });
}

export function insertPost(post) {
  console.log({ post });
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO posts (text, user, timestamp) VALUES (?, ?, ?)`,
        [post.text, post.user, post.timestamp ],
        (_, result) => {resolve(result); },
        (_, error) => { reject(error); }
      );
    });
  });
}
export function deletePost(id) {
  console.log({id});
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `DELETE from posts where id = ?`,
        [id],
        (_, result) => {resolve(result); },
        (_, error) => { reject(error); }
      );
    });
  });
}
export function fetchPosts() {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM posts',
        [],
        (_, result) => {
          // console.log(result.rows.raw() );

          const posts = [];

          for (const dp of result.rows.raw()) {
            console.log(dp);
            posts.push(
              new Post(dp.user, dp.text, dp.timestamp, dp.id  )
            );
          }
          // console.log({ posts });
          resolve(posts);
        },
        (_, error) => { reject(error);  }
      );
    });
  });
}
export function fetchPost(id) {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM posts WHERE id = ?',
        [id],
        (_, result) => {
          const dbPost = result.rows.item(0);
          const post = new Post(dbPost.user, dbPost.text, dbPost.timestamp, dbPost.id );
          // console.log(post);
          resolve(post);
        },
        (_, error) => { reject(error);  }
      );
    });
  });
}
export function updatePost(post) {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'UPDATE posts SET user = ? , text = ? , timestamp = ? WHERE id = ?',
        [ post.user, post.text, post.timestamp, post.id],
        (_, result) => {
          // console.log({ result });
          resolve();
        },
        (_, error) => { reject(error);  }
      );
    });
  });
}
// const tableName = 'todoData';
//
// enablePromise(true);
//
// export const getDBConnection = async () => {
//   return openDatabase({ name: 'todo-data.db', location: 'default' });
// };
//
// export const createTable = async (db: SQLiteDatabase) => {
//   // create table if not exists
//   const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
//         value TEXT NOT NULL
//     );`;
//
//   await db.executeSql(query);
// };
//
// export const getTodoItems = async (db: SQLiteDatabase): Promise<ToDoItem[]> => {
//   try {
//     const todoItems: ToDoItem[] = [];
//     const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
//     results.forEach(result => {
//       for (let index = 0; index < result.rows.length; index++) {
//         todoItems.push(result.rows.item(index))
//       }
//     });
//     return todoItems;
//   } catch (error) {
//     console.error(error);
//     throw Error('Failed to get todoItems !!!');
//   }
// };
//
// export const saveTodoItems = async (db: SQLiteDatabase, todoItems: ToDoItem[]) => {
//   const insertQuery =
//     `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
//     todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');
//
//   return db.executeSql(insertQuery);
// };
//
// export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
//   const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
//   await db.executeSql(deleteQuery);
// };
//
// export const deleteTable = async (db: SQLiteDatabase) => {
//   const query = `drop table ${tableName}`;
//
//   await db.executeSql(query);
// };
