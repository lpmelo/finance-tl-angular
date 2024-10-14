import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guardian',
  templateUrl: './guardian.component.html',
  styleUrl: './guardian.component.scss',
})
export class GuardianComponent implements OnInit{
  waitingCheck = false;

  ngOnInit(): void {
    this.verifyAuthentication();
  }
  
  verifyAuthentication() {
    if (window.location.pathname != '/login') {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
      } else {
        window.location.replace('/login');
      }
    }
  }
}
