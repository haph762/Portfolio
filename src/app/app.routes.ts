import { Routes } from '@angular/router';
import { LifecycleEventComponent } from './_modules/lifecycle-event/lifecycle-event.component';
import { PipesTestComponent } from './_modules/pipes-test/pipes-test.component';
import { LoginComponent } from './_modules/login/login.component';
import { RouterProtectionComponent } from './_modules/login/router-protection/router-protection.component';
import { AuthGuard } from './_modules/_core/guards/auth-guard.guard';
import { NgOutZoneComponent } from './_modules/ng-out-zone/ng-out-zone.component';
import { HomeComponent } from './_modules/home/home.component';
import { PageNotFoundComponent } from './_modules/page-not-found/page-not-found.component';
import { MyCvComponent } from './_modules/my-cv/my-cv.component';
import { App2Component } from './_modules/screen/app2.component';

export const routes: Routes = [
    {
        path: 'demo-angular',
        title: 'demo-angular',
        component: App2Component,
        children: [
            {
                path: '',
                title: 'ng-out-zone',
                component: HomeComponent
            },
            {
                path: 'ng-out-zone',
                title: 'ng-out-zone',
                component: NgOutZoneComponent
            },
            {
                path: 'reactive-form',
                title: 'reactive-form',
                loadChildren: () => import('./_modules/reactive-form/my-reactive-form.module').then(m => m.MyReactiveFormModule)
            },
            {
                path: 'lifecycle',
                title: 'lifecycle',
                component: LifecycleEventComponent
            },
            {
                path: 'pipes-test',
                title: 'pipes-test',
                component: PipesTestComponent
            },
            {
                path: 'login',
                title: 'login',
                component: LoginComponent
            },
            {
                path: 'router-protection',
                title: 'router-protection',
                canActivate: [AuthGuard],
                component: RouterProtectionComponent
            },
        ]
    },
    {
        path: '',
        title: 'Portfolio',
        component: MyCvComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
