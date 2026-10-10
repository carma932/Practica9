import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosList } from './avisos-list';

describe('AvisosList', () => {
  let component: AvisosList;
  let fixture: ComponentFixture<AvisosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisosList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
