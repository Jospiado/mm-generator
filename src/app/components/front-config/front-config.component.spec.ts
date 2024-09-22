import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontConfigComponent } from './front-config.component';

describe('FrontConfigComponent', () => {
  let component: FrontConfigComponent;
  let fixture: ComponentFixture<FrontConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
