import { Subjects, Publisher, OrderCancelledEvent } from '@moviecon/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
