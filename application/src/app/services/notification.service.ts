import { Injectable } from '@angular/core';
import { NotificationModel, nullNotification } from '@app/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notification$: BehaviorSubject<NotificationModel | null> =
  new BehaviorSubject<NotificationModel | null>(null);

  private _latestNotification: NotificationModel = { ...nullNotification };
  private _delay: number = 3000;

  addNotification(notification: NotificationModel): void {
    this.notification$.next(notification);
    this._latestNotification = notification;
    setTimeout(() => {
      if (this._latestNotification === notification && !notification.canCancel) { this.clean(); }
    }, this._delay);
  }

  clean(): void { this.notification$.next(null); }

  throwError(message: string, canCancel: boolean = false): void {
    this.addNotification({
      type: 'error',
      message,
      canCancel
    });
  }

  throwInfo(message: string, canCancel: boolean = false): void {
    this.addNotification({
      type: 'info',
      message,
      canCancel
    });
  }

  throwWarning(message: string, canCancel: boolean = false): void {
    this.addNotification({
      type: 'warning',
      message,
      canCancel
    });
  }

  throwSuccess(message: string, canCancel: boolean = false): void {
    this.addNotification({
      type: 'success',
      message,
      canCancel
    });
  }

}
