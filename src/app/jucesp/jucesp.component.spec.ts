import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JucespComponent } from './jucesp.component';

describe('JucespComponent', () => {
  let component: JucespComponent;
  let fixture: ComponentFixture<JucespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JucespComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JucespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
