import { Injectable } from '@angular/core';
import { NotificationModel, nullNotification } from '@app/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notification$: BehaviorSubject<NotificationModel | null> = new BehaviorSubject<NotificationModel | null>(
    null
  );

  private _latestNotification: NotificationModel = { ...nullNotification };
  private _delay: number = 3000;

  public clean(): void {
    this.notification$.next(null);
  }

  public throwError(message: string, canCancel: boolean = false): void {
    this._addNotification({
      type: 'error',
      message,
      canCancel
    });
  }

  public throwInfo(message: string, canCancel: boolean = false): void {
    this._addNotification({
      type: 'info',
      message,
      canCancel
    });
  }

  public throwWarning(message: string, canCancel: boolean = false): void {
    this._addNotification({
      type: 'warning',
      message,
      canCancel
    });
  }

  public throwSuccess(message: string, canCancel: boolean = false): void {
    this._addNotification({
      type: 'success',
      message,
      canCancel
    });
  }

  private _addNotification(notification: NotificationModel): void {
    this.notification$.next(notification);
    this._latestNotification = notification;
    setTimeout(() => {
      if (
        this._latestNotification === notification &&
        !notification.canCancel
      ) {
        this.clean();
      }
    }, this._delay);
  }
}
