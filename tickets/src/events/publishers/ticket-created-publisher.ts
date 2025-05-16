import { Publisher, Subjects, TicketCreatedEvent } from '@moviecon/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
