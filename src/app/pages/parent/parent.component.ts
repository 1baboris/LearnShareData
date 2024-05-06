import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  data = '';

  @ViewChild(ChildComponent) child: any;
  onClickGetChildData() {
    this.data = this.child.data;
  }

  getChildData(event: any) {
    this.data = event;
  }
}
