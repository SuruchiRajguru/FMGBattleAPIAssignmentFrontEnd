import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallbattlesComponent } from './listallbattles.component';

describe('ListallbattlesComponent', () => {
  let component: ListallbattlesComponent;
  let fixture: ComponentFixture<ListallbattlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallbattlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallbattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
