import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from "./auth.service";

@NgModule({
    declarations: [],
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
