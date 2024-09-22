import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmGeneratorElementComponent } from './mm-generator-element.component';

describe('MmGeneratorElementComponent', () => {
  let component: MmGeneratorElementComponent;
  let fixture: ComponentFixture<MmGeneratorElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmGeneratorElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmGeneratorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
