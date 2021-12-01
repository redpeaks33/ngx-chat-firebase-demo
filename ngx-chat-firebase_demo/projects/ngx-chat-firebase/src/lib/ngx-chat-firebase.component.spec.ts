import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { NgxChatFirebaseComponent } from './ngx-chat-firebase.component';

describe('NgxChatFirebaseComponent', () => {
  let component: NgxChatFirebaseComponent;
  let fixture: ComponentFixture<NgxChatFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxChatFirebaseComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChatFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
