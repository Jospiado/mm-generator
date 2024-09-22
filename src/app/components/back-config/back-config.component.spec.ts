import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackConfigComponent } from './back-config.component';

describe('BackConfigComponent', () => {
  let component: BackConfigComponent;
  let fixture: ComponentFixture<BackConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
