import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs/Rx";
import { AngularFire } from 'angularfire2';
import { User } from "../shared/user.interface";

@Injectable()
export class AuthService {

    constructor(public angularFire: AngularFire) {
    }

    registerUser(user: User): Observable<any> {
        const subject = new Subject();

        this.angularFire.auth.createUser({email: user.email, password: user.password})
            .then((value) => {
                const userObj = {name: user.email};

                // @todo: move this to user.service and add error handling
                this.angularFire.database.object('/users/' + value.uid).set(userObj)
                    .then(
                        () => {
                            debugger;
                            subject.next('User saved');

                        }
                    )
                    .catch(
                        (error) => {
                            debugger;
                            subject.error(error.message);
                        }
                    );

                console.log("Registered uid: " + value.uid);
                subject.next('Registration successful.');
            })
            .catch((error) => {
                console.log("Register Error: " + error.message);
                // @todo: pass error message to logger.service

                subject.error(error.message);
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
