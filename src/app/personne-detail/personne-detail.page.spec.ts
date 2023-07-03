import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonneDetailPage } from './personne-detail.page';

describe('PersonneDetailPage', () => {
  let component: PersonneDetailPage;
  let fixture: ComponentFixture<PersonneDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonneDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
