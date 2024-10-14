import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent, ToastType } from '../components/toast/toast.component';

export const openToast = (
  snackBar: MatSnackBar,
  type: ToastType,
  message: string,
  duration: number
) => {
  snackBar.openFromComponent(ToastComponent, {
    duration: duration,
    data: { type: type, message: message },
  });
};
