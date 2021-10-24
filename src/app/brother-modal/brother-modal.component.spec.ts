import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherModalComponent } from './brother-modal.component';

describe('BrotherModalComponent', () => {
  let component: BrotherModalComponent;
  let fixture: ComponentFixture<BrotherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrotherModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
