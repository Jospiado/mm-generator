import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmAttributeGeneratorComponent } from './mm-attribute-generator.component';

describe('MmAttributeGeneratorComponent', () => {
  let component: MmAttributeGeneratorComponent;
  let fixture: ComponentFixture<MmAttributeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmAttributeGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmAttributeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
