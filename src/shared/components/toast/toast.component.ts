import { Component, inject, Inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export type ToastType = 'success' | 'error';

type IconsType = {
  [key: string]: string;
};

@Component({
    selector: 'toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    standalone: false
})
export class ToastComponent {
  snackBarRef = inject(MatSnackBarRef);
  type: string;
  message: string;
  icons: IconsType = {
    success: 'check_circle',
    error: 'cancel'
  };

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { type: string; message: string }
  ) {
    this.type = data.type;
    this.message = data.message;
  }
}
