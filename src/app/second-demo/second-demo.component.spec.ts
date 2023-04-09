import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDemoComponent } from './second-demo.component';

describe('SecondDemoComponent', () => {
  let component: SecondDemoComponent;
  let fixture: ComponentFixture<SecondDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
