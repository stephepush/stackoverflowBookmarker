import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'

@Injectable({ 
    providedIn: 'root',
})

export class AuthService {
    userData: any;
    constructor(
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ){
        /*
            Saves user data in localstorage when logged in
        */
       this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!)
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!)
            }
       });
    }
    //Sends email verification when new user signs up
    SendVerificationMail(){
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['verify-email-address'])
            })
    }
    //Resets forgotten password
    ForgotPassword(passwordResetEmail: string) {
        return this.afAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.')
            })
            .catch((error) => {
                window.alert(error)
            })
    }
    SetUserData(user: any){
        /*const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `user/${user.uid}`
        );*/
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
    
        };
        /*return userRef.setUserData. {
            merge: true,
        })*/
       }
    //Sign in with email/password
    SignIn(email: string, password: string) {
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                //this.SetUserData(result.user);
                this.afAuth.authState.subscribe((user) => {
                    if (user) {
                        this.router.navigate(['dashboard']);
                    }
                })
            })
            .catch((error) => {
                window.alert(error.message)
            })
    }
    SignUp(email: string, password: string) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                /*
                    Calls the SendVerificationMail() 
                    function when 
                    new users sign up and returns promise
                */
               this.SendVerificationMail();
               this.SetUserData(result.user)                
            })
            .catch((error) => {
                window.alert(error.message)
            })
    }
        //Sign in with Google
        GoogleAuth() {
            return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
                this.router.navigate(['dashboard']);
            })
        }
        AuthLogin(provider: any) {
            return this.afAuth
                .signInWithPopup(provider)
                .then((result) => {
                    this.router.navigate(['dashboard']);
                    this.SetUserData(result.user);
                })
                .catch((error) => {
                    window.alert(error);
                });
        }
        SignOut() {
            return this.afAuth.signOut().then(() => {
                localStorage.removeItem('user');
                this.router.navigate(['sign-in'])
            });
           }
}