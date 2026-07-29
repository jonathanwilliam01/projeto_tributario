import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpWebComponent } from './prp-web.component';

describe('PrpWebComponent', () => {
  let component: PrpWebComponent;
  let fixture: ComponentFixture<PrpWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrpWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrpWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
