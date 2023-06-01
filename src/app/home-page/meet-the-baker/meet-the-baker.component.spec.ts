import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheBakerComponent } from './meet-the-baker.component';

describe('MeetTheBakerComponent', () => {
  let component: MeetTheBakerComponent;
  let fixture: ComponentFixture<MeetTheBakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetTheBakerComponent]
    });
    fixture = TestBed.createComponent(MeetTheBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
