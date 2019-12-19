import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserModel } from '../shared/model/user.model';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    user: UserModel = new UserModel();
    constructor(
      public router: Router, public loinService: LoginService
    ) {

    }

    ngOnInit() {}

    onLoggedin() {


        this.makeLogin(this.user);

    }

    makeLogin(user) {
       this.loinService.login(user).subscribe(
           data => {
            let  userJson = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            console.log(userJson);
            localStorage.setItem("id", userJson.id);
            if("user" in userJson){
             localStorage.setItem("Role", userJson.user.role);
             localStorage.setItem("Name", userJson.user.firstName + " " + userJson.user.lastName);
                
            }else{
                localStorage.setItem("Role", userJson.role);
                localStorage.setItem("Name", userJson.firstName + " " + userJson.lastName);
                
            }
            
            this.router.navigateByUrl("/dashboard");
           }, error => {              
           }
       );
        localStorage.setItem('isLoggedin', 'true');
    }
}
