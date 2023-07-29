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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    const db = await openDB('jate', 1);
    const transaction = db.transaction('jate', 'readwrite');
    const store = transaction.objectStore('jate');
    await store.put(content);
    await transaction.complete;
    console.log('Content added to the database:', content);
  } catch (error) {
    console.error('Error putting content into the database:', error);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1);
    const transaction = db.transaction('jate', 'readonly');
    const store = transaction.objectStore('jate');
    const allContent = await store.getAll();
    await transaction.complete;
    console.log('All content retrieved from the database:', allContent);
    return allContent;
  } catch (error) {
    console.error('Error getting content from the database:', error);
    return [];
  }
};

initdb();
