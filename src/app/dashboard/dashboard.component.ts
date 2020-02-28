import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'app works!';
  message: string;
  messages: string[] = [];
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
    
  }

  getMessages() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
    });
  }

}
