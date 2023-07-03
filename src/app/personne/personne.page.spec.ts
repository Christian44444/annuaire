import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonnePage } from './personne.page';

describe('PersonnePage', () => {
  let component: PersonnePage;
  let fixture: ComponentFixture<PersonnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
