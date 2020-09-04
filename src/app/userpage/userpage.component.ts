import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['/'])
    }
  }
  signout() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['/']);
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }

  completeprofile() {
    this.router.navigate(['completeprofile']);
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
