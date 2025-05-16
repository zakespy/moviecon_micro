import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@moviecon/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
