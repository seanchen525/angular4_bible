import { Component, OnInit } from '@angular/core';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: any;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessage()
        .subscribe(message => { this.message = message });
  }

}
