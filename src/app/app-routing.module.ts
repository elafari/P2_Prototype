import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from "./auth/auth.module";
import { LoginComponent } from "./auth/login.component";
import { NavComponent } from "./shared/nav/nav.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'test', component: TestComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AuthModule
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}

export const routingComponents = [LoginComponent, NavComponent, FooterComponent, TestComponent];