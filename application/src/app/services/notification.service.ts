import { Injectable } from '@angular/core';
import { NotificationInterface } from '@app/declarations';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notification$: BehaviorSubject<NotificationInterface | null> = new BehaviorSubject<NotificationInterface | null>(
    null
  );

  private _latestNotification: Partial<NotificationInterface> = {};
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

  private _addNotification(notification: NotificationInterface): void {
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
