import { NotificationTypeModel } from '@app/models';

export interface NotificationModel {
  type: NotificationTypeModel;
  message: string;
  canCancel: boolean;
}

export const nullNotification: NotificationModel = {
  type: 'info',
  message: '',
  canCancel: true
};
