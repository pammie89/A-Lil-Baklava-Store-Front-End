import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecolsComponent } from './imagecols.component';

describe('ImagecolsComponent', () => {
  let component: ImagecolsComponent;
  let fixture: ComponentFixture<ImagecolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagecolsComponent]
    });
    fixture = TestBed.createComponent(ImagecolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
