import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssonlineDevComponent } from './issonline-dev.component';

describe('IssonlineDevComponent', () => {
  let component: IssonlineDevComponent;
  let fixture: ComponentFixture<IssonlineDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssonlineDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssonlineDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
