import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsModalComponent } from './instructions-modal.component';

describe('InstructionsModalComponent', () => {
  let component: InstructionsModalComponent;
  let fixture: ComponentFixture<InstructionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
