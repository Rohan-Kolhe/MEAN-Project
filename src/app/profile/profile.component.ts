import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userdata: any = [
    { name: "Rohan Kolhe", location: "Pune" },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  gotoJobs() {
    this.router.navigate(['userpage']);
  }

}
