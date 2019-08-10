import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseAdapter {
  constructor(private db: AngularFirestore) {}

  /* istanbul ignore next */
  fetchCollection<T>(collectionName: string): Observable<T[]> {
    return this.db.collection<T>(collectionName).valueChanges();
  }

  /* istanbul ignore next */
  async createDocument<T>(collectionName: string, item: T): Promise<T> {
    const id = this.db.createId();
    const document = { ...item, id } as T;
    await this.db
      .collection<T>(collectionName)
      .doc(id)
      .set(document);
    return document;
  }
}
