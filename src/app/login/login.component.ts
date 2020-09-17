import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("formData") formData: NgForm;

  user = {
    username: '',
    password: ''
  }
  status: String;

  error = '';
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  onSubmit() {
    // console.log(formData);
    this.user.username = this.formData.value.userName;
    this.user.password = this.formData.value.password;
    // status: String;
    // console.log(this.user.username);
    // console.log(this.user.password);
    this.http.post("http://localhost:8080/login", this.user).subscribe(responseData => {
      this.status = responseData['status'];
      if (responseData['status'] == 'Success') {
        console.log(responseData['data']['authToken']);
        //    this.router.navigate(['/dashboard']);
      }
      else {
        console.log(responseData['message']);
      }
    });
    if (this.status == "Success") {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid Credentials';
    }
  }
}

