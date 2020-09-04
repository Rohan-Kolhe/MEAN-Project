import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  async loginProcessHere() {
    const data = this.fbFormGroup.value;

    // ajax call
    const url = 'http://localhost:3000/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['userpage']);
    } else {
      this.uiInvalidCredential = true;
    }
  }

}
