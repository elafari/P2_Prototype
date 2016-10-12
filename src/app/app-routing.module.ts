import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule }        from "./auth/auth.module";
import { RegisterComponent } from "./auth/register.component";
import { LoginComponent }    from "./auth/login.component";
import { NavComponent }      from "./shared/nav/nav.component";
import { FooterComponent }   from "./shared/footer/footer.component";
import { TestComponent }     from "./test/test.component";

const routes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'register', component: RegisterComponent},
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

export const routingComponents = [RegisterComponent, LoginComponent, NavComponent, FooterComponent, TestComponent];