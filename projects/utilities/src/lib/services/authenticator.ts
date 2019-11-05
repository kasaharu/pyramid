import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authenticator {
  constructor(private afAuth: AngularFireAuth) {}
  loggedInUser$: Observable<firebase.User | null> = this.afAuth.user;

  login(): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
