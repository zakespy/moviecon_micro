import { Publisher, OrderCreatedEvent, Subjects } from '@moviecon/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
