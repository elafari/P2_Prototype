import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';

// Must export the config. @todo: move this to configService
export const firebaseConfig = {
    apiKey: "AIzaSyBtv1qf-Vq1jBtUzO0kVULiTkqab-ysurY",
    authDomain: "diseasediary.firebaseapp.com",
    databaseURL: "https://diseasediary.firebaseio.com",
    storageBucket: "diseasediary.appspot.com",
    messagingSenderId: "81460151035"
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
