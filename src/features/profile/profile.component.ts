import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userData = {name: "Lucas Pereira", nickname:"Lucas", user:"lpmelo", email:"lpmelo10@gmail.com"}

}
