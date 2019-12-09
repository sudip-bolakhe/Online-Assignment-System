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
               let userJson = JSON.parse(JSON.parse(JSON.stringify(data))._body);
               localStorage.setItem("id", userJson.id);
                this.router.navigateByUrl("/dashboard");
           }, error => {

           }
       );
        localStorage.setItem('isLoggedin', 'true');
    }
}
