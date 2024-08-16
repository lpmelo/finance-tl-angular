import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  actualUrl = window.location.pathname;
  
  ngOnInit(): void {
    if (window.location.pathname === '/') {
      window.location.replace('/login');
    }
  }
}
