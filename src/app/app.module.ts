import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigService } from "./shared/config.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(ConfigService.firebaseConfig, ConfigService.firebaseAuthConfig),
        AuthModule
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
