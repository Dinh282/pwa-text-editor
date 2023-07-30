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

export const putDb = async (content) => {
  try {
    const db = await openDB('jate', 1);
    const transaction = db.transaction('jate', 'readwrite');
    const store = transaction.objectStore('jate');

    //Here we are removing 'id' property from the content before adding it to the db.
    const contentWithoutId = { ...content };
    delete contentWithoutId.id;
    await store.put(contentWithoutId);
    console.log('Content added to the database:', contentWithoutId);
  } catch (error) {
    console.error('Error putting content into the database:', error);
  }
};

export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);

  // Extract the text content from the result array and join it into a single string so that editor from editor.js can set the string value.
  return result.map((obj) => obj.value).join('');;
};

initdb();
