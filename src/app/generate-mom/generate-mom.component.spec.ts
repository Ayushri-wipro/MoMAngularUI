import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMomComponent } from './generate-mom.component';

describe('GenerateMomComponent', () => {
  let component: GenerateMomComponent;
  let fixture: ComponentFixture<GenerateMomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateMomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
