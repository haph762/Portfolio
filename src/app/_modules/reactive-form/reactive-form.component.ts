import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResultForm } from '../result-form/result-form';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginF: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    password: new FormControl('', Validators.required)
  });
  resultForm: ResultForm[] = [];
  constructor() { }

  ngOnInit() {
  }
  submit() {
    if (this.loginF.invalid) { return; }
    this.resultForm.push(this.loginF.value);
    this.loginF.reset();
  }

}
