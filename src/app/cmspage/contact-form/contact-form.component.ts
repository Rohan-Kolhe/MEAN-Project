import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  gotoProfile() {
    this.router.navigate(['profile']);
  }

  gotoJob() {
    this.router.navigate(['userpage']);
  }

}
