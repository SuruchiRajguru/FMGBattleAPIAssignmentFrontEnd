import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBattleComponent } from './list-battle.component';

describe('ListBattleComponent', () => {
  let component: ListBattleComponent;
  let fixture: ComponentFixture<ListBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
