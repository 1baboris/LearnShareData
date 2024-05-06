import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-comp-2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css',
})
export class Comp2Component {
  data$;
  inputText = '';

  constructor(private appService: AppService) {
    this.data$ = appService.getMessage;
  }

  sendMessage() {
    this.appService.sendMessage(this.inputText);
  }
}
