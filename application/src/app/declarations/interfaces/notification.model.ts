import { NotificationType } from '@app/declarations';

export interface NotificationInterface {
  type: NotificationType;
  message: string;
  canCancel: boolean;
}
