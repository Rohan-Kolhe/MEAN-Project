import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void { }

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['/']);
  }

}
