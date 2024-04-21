import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhfComponent } from './rhf.component';

describe('RhfComponent', () => {
  let component: RhfComponent;
  let fixture: ComponentFixture<RhfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RhfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RhfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
