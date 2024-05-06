import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  data = 'I am from child';
  @Output() emitChildData = new EventEmitter();

  onClick() {
    this.emitChildData.emit(this.data);
  }
}
