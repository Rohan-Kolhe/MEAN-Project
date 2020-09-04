import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-completeprofile',
  templateUrl: './completeprofile.component.html',
  styleUrls: ['./completeprofile.component.css']
})
export class CompleteprofileComponent implements OnInit {

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    SchoolorCollegeUniversity: ['', Validators.required],
    Degree: ['', Validators.required],
    Specialization: ['', Validators.required],
    startyear: ['', Validators.required],

    lastyear: ['', Validators.required],
    recentjob: ['', Validators.required],
    recentcompany: ['', Validators.required],
    jstartyear: ['', Validators.required],
    jlastyear: ['', Validators.required],
    country: ['', Validators.required],
    CityDistrict: ['', Validators.required],
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

  gotoJobs() {
    this.router.navigate(['userpage']);
  }

  gotoprofile() {
    this.router.navigate(['profile']);
  }

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:5500/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['userpage']);
  }


}
