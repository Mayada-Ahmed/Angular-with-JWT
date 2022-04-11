import { userCredentials } from './../../../Models/security.model';
import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter, Injectable, NgModule, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {

  @Input()
  action:string = 'Sign up'


  @Output()
  onSubmit = new EventEmitter<userCredentials>();

  constructor(private fb:FormBuilder) { }

  form = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
  });

  emailErr(){
    var field = this.form.get('email')
    if(field?.hasError('required')){
      return 'Email is required';
    }

    if(field?.hasError('email')){
      return 'The email is invalid';
    }

    return '';
  }

  ngOnInit(): void {
  }
}

