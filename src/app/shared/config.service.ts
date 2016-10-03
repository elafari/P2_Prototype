import {Injectable} from '@angular/core';

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
}
