import { Injectable } from '@angular/core';
import { AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class ConfigService {
    constructor() {
    }

    public static firebaseConfig = {
        apiKey: "AIzaSyBtv1qf-Vq1jBtUzO0kVULiTkqab-ysurY",
        authDomain: "diseasediary.firebaseapp.com",
        databaseURL: "https://diseasediary.firebaseio.com",
        storageBucket: "diseasediary.appspot.com",
        messagingSenderId: "81460151035"
    };

    public static firebaseAuthConfig = {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
    };

    public static getEmailRegex() {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    };
}
