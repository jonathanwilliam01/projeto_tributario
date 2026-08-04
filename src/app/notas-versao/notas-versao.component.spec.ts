import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasVersaoComponent } from './notas-versao.component';

describe('NotasVersaoComponent', () => {
  let component: NotasVersaoComponent;
  let fixture: ComponentFixture<NotasVersaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasVersaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasVersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
