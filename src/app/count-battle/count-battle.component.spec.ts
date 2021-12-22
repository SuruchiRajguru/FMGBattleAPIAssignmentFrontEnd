import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBattleComponent } from './count-battle.component';

describe('CountBattleComponent', () => {
  let component: CountBattleComponent;
  let fixture: ComponentFixture<CountBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
