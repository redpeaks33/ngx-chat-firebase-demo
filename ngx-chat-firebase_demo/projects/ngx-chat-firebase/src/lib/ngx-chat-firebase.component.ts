import { Component, OnInit, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import * as fs from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NgxChatFirebaseService } from './ngx-chat-firebase.service';

@Component({
  selector: 'ngx-chat-firebase',
  templateUrl: './ngx-chat-firebase.component.html',
  styleUrls: ['./ngx-chat-firebase.component.css']
})
export class NgxChatFirebaseComponent implements OnInit, AfterContentInit {
  @ViewChild('messagePane') private pane!: ElementRef;

  item$: Observable<fs.DocumentData[]>;
  comment: string = "";

  constructor(private chatService: NgxChatFirebaseService) {
    this.item$ = chatService.getMessages().pipe(
      map(results => results.sort((a, b) => (a.time > b.time) ? 1 : -1))
    );

    this.item$.subscribe(n => {
      this.scrollToBottom();
    });
  }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.comment == "") return;
    this.chatService.sendMessage(this.comment);
    this.comment = " ";
  }

  scrollToBottom() {
    this.pane.nativeElement.scrollTop = this.pane.nativeElement.scrollHeight;
  }

  clearMessage() {
    this.comment = "";
  }

  clearAllMessages() {
    this.chatService.clearAllMessages();
  }
}
