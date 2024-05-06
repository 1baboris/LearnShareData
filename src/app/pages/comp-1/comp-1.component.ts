import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-comp-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css',
})
export class Comp1Component {
  data$;
  inputText = '';

  constructor(private appService: AppService) {
    this.data$ = appService.getMessage;
  }

  sendMessage() {
    this.appService.sendMessage(this.inputText);
  }
}
