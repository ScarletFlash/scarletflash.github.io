import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationModel, nullNotification } from '@app/models';
import { NotificationService } from '@app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  public notification: NotificationModel = { ...nullNotification };

  private _subscriptions: Subscription[] = [];

  constructor(private _notificationService: NotificationService) {}

  public ngOnInit(): void {
    this._subscriptions.push(
      this._notificationService.notification$.subscribe(
        (response: NotificationModel) => {
          this.notification = { ...response };
        }
      )
    );
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  public dismiss(): void {
    this._notificationService.clean();
  }
}
