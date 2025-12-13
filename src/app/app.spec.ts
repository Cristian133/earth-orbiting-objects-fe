import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('b')?.textContent).toContain('Nos daremos algunos gustos');
  });
});

/*
Aunque Angular sea Zoneless (o estemos usando la nueva API de Signals), en los
Unit Tests con TestBed el comportamiento es un poco diferente al de la
aplicación corriendo en el navegador.

Aquí está el porqué usamos detectChanges():

Inicialización de la Vista: Al crear el componente con TestBed.createComponent,
Angular instancia la clase pero no renderiza el template inicial inmediatamente.
fixture.detectChanges() es necesario para disparar ese primer ciclo de
renderizado y que el HTML (como la etiqueta <b>) exista en el DOM.

Control Manual: En los tests, ComponentFixture está diseñado para darnos control
manual sobre cuándo se actualiza la vista, permitiéndonos testear estados
"antes" y "después" del renderizado.
*/
