import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-authorize-view',
  templateUrl: './authorize-view.component.html',
  styleUrls: ['./authorize-view.component.css']
})
export class AuthorizeViewComponent implements OnInit {

  constructor(private security:SecurityService) { }

  ngOnInit(): void {
  }

  @Input()
  role:string ='';

  public isAuthorized(){
    if(this.role)
    {
      return this.security.getRole() === this.role
    }else
    {
      return this.security.isAuthenticated();
    }
  }
}
