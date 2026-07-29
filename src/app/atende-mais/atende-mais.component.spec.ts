import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendeMaisComponent } from './atende-mais.component';

describe('AtendeMaisComponent', () => {
  let component: AtendeMaisComponent;
  let fixture: ComponentFixture<AtendeMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendeMaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtendeMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
