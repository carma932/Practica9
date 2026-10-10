import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasList } from './rutinas-list';

describe('RutinasList', () => {
  let component: RutinasList;
  let fixture: ComponentFixture<RutinasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutinasList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
