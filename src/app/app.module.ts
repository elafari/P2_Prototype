import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { ConfigService } from "./shared/config.service";

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(ConfigService.firebaseConfig, ConfigService.firebaseAuthConfig)
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
