import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioAnimal } from './formulario-animal';

describe('FormularioAnimal', () => {
  let component: FormularioAnimal;
  let fixture: ComponentFixture<FormularioAnimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAnimal],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioAnimal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
