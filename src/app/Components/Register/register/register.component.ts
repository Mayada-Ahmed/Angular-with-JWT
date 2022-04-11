import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';
import { userCredentials } from './../../../Models/security.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private securityService:SecurityService,private router:Router) { }
  errors:string[]=[];

  ngOnInit(): void {
  }

  register(userCredentials:userCredentials){
    this.securityService.register(userCredentials).subscribe(authenticationResponse =>{
      this.securityService.saveToken(authenticationResponse);
      this.router.navigate(['/home'])
    })
  }

}
