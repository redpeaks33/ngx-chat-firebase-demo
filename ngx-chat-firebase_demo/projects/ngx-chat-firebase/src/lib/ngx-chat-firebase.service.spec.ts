import { TestBed } from '@angular/core/testing';

import { NgxChatFirebaseService } from './ngx-chat-firebase.service';

describe('NgxChatFirebaseService', () => {
  let service: NgxChatFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxChatFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
