import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";
import { AuthService } from "./auth.service";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {
}
