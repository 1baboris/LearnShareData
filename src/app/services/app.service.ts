import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private message = new BehaviorSubject('Test Massage');
  getMessage = this.message.asObservable();
  constructor() {}

  sendMessage(message: string) {
    this.message.next(message);
  }
}
