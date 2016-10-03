import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {ConfigService} from "./shared/config.service";

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(ConfigService.firebaseConfig)
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
