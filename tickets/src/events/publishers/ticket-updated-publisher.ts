import { Publisher, Subjects, TicketUpdatedEvent } from '@moviecon/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
