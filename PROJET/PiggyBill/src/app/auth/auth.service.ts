import {Injectable} from '@angular/core';
import {User} from "./user";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {
  }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error);
      // ...
    });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ...
    });
    this.router.navigate(['/dashboard'])
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }


  logoutUser() {
    firebase.auth().signOut();
    this.router.navigate(['/signin'])
  }

}
