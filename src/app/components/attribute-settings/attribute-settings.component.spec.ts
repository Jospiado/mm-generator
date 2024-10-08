import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSettingsComponent } from './attribute-settings.component';

describe('AttributeSettingsComponent', () => {
  let component: AttributeSettingsComponent;
  let fixture: ComponentFixture<AttributeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
