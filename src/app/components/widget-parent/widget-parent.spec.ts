import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetParent } from './widget-parent';

describe('WidgetParent', () => {
  let component: WidgetParent;
  let fixture: ComponentFixture<WidgetParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
