import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from "./register.component";
import { AuthService } from "./auth.service";

@NgModule({
    declarations: [
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
