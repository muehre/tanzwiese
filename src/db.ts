// db.ts
import Dexie, { Table } from 'dexie';


export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  favorites!: Table<{
    id: string,
    isFavorite: boolean,
  }>; 

  constructor() {
    super('tanzwieseDb');
    this.version(1).stores({
        favorites: 'id, isFavorite' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
