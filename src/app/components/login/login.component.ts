import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {DummyModel} from '../../models/dummyModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dummy: DummyModel;
  number1 = 10;
  number2 = 5;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  testDummy() {
    this.loginService.getHomeImages().subscribe(value => {
      console.log(value);
    });

  }

  testDummy2() {

    this.loginService.testDummyEndPoint().subscribe(
      value => {
        this.dummy = value;
        console.log(value);
      }
    );
  }

}
