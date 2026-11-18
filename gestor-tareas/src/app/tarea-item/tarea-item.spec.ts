import { TestBed } from '@angular/core/testing';
import { TareaItem } from './tarea-item';

describe('TareaItem', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaItem],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TareaItem);

    fixture.componentRef.setInput('tarea', {
      id: 1,
      texto: 'Tarea de prueba',
      hecha: false,
    });

    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});