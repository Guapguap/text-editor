import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some value and adds it to the database
export const putDb = async (id, value) => {
const jateDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({ id: id, value: value });
const result = await request;
console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  // Create a connection to the database and version we want to use.
  const jateDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // use the .getAll() method to grab all the content in the DB
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;

  // log result
  console.log("Data saved to the jateDb", result);

}

initdb();
