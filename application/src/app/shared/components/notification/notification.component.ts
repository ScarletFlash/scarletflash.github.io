import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationInterface } from '@app/declarations';
import { NotificationService } from '@app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  public notification: Partial<NotificationInterface> = {};

  private _subscriptions: Subscription[] = [];

  constructor(private _notificationService: NotificationService) {}

  public ngOnInit(): void {
    this._subscriptions.push(
      this._notificationService.notification$.subscribe(
        (response: NotificationInterface) => {
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
