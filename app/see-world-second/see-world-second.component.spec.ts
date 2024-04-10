import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeWorldSecondComponent } from './see-world-second.component';

describe('SeeWorldSecondComponent', () => {
  let component: SeeWorldSecondComponent;
  let fixture: ComponentFixture<SeeWorldSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeWorldSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeWorldSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
