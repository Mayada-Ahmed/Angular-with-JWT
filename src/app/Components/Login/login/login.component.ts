import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';
import { userCredentials } from './../../../Models/security.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityService:SecurityService,private router:Router) { }

  ngOnInit(): void {
  }
  
  login(userCredentials:userCredentials){
    this.securityService.login(userCredentials).subscribe(authenticationResponse=>{
      this.securityService.saveToken(authenticationResponse);
      this.router.navigate(['/home']);
    })
  }

}
