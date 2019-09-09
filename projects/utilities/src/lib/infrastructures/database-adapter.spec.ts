import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseAdapter } from './database-adapter';

// NOTE: テスト用のダミーデータ
//       ref. https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
const firebase = { apiKey: 'dummy', authDomain: '', databaseURL: '', projectId: 'dummy', storageBucket: '', messagingSenderId: '' };

class MockAngularFirestore {
  collection() {
    return { valueChanges() {} };
  }
}

describe('DatabaseAdapter', () => {
  let adapter: DatabaseAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebase)],
      providers: [{ provide: AngularFirestore, useClass: MockAngularFirestore }],
    });

    adapter = TestBed.get(DatabaseAdapter);
  });

  it('should be created', () => {
    expect(adapter).toBeTruthy();
  });
});
