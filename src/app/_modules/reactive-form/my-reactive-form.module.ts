import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultFormComponent } from '../result-form/result-form.component';

const routes: Routes = [
  { path: '', component: ReactiveFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [ReactiveFormComponent, ResultFormComponent]
})
export class MyReactiveFormModule { }
