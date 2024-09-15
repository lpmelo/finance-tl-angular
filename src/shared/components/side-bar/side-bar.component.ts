import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ButtonObjI {
  label: string;
  url: string;
}

interface ButtonListI extends Array<ButtonObjI> {}

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  buttonList: ButtonListI = [{ label: 'Home', url: '/home' },];

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      const currentPath = window.location.pathname;
      const navButton = document.querySelector(`[data-url='${currentPath}']`);
      navButton?.classList.add('active');
    });
  }

  logout() {
    window.location.replace('/login');
  }

  returnButtonClass(buttonUrl: string) {
    const currentPath = window.location.pathname;
    if (buttonUrl === currentPath) {
      return 'nav-button active';
    }
    return 'nav-button';
  }
}
