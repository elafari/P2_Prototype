import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs/Rx";
import { AngularFire } from 'angularfire2';
import { User } from "../shared/user.interface";

@Injectable()
export class AuthService {

    constructor(public angularFire: AngularFire) {
    }

    registerUser(user: User): Observable<boolean> {
        const subject = new Subject();

        this.angularFire.auth.createUser({email: user.email, password: user.password})
            .then((value) => {
                // create entry in users - table with correct uid
                debugger;
                this.angularFire.database.object('/_db3/users/' + value.uid).set({
                    name: user.email,
                    age: 0
                });
                console.log("Registered uid: " + value.uid);
                subject.next({isRegistered: true});
            })
            .catch((error) => {
                console.log("Register Error: " + error.message);
                subject.next({
                    isRegistered: false,
                    message: error.message
                });
            });

        return subject.asObservable();
    }

    loginUser(user: User) {
        this.angularFire.auth.login({email: user.email, password: user.password})
            .then((value) => {
                console.log("Login uid: " + value.uid);
            })
            .catch((error) => {
                console.log("Login Error: " + error.message);
            });
    }

    logout() {
        this.angularFire.auth.logout()
    }
}
