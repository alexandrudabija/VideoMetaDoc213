import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSlidesComponent } from './auto-slides.component';

describe('AutoSlidesComponent', () => {
  let component: AutoSlidesComponent;
  let fixture: ComponentFixture<AutoSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
