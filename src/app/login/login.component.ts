import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
