import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmGeneratorClassComponent } from './mm-generator-class.component';

describe('MmGeneratorClassComponent', () => {
  let component: MmGeneratorClassComponent;
  let fixture: ComponentFixture<MmGeneratorClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmGeneratorClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmGeneratorClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
