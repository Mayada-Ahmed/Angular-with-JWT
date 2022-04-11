import { Data } from "@angular/router";

export interface userCredentials{
    email:string;
    password:string;
}

export interface authenticationResponse{
    token:string;
    expiration:Data;
}