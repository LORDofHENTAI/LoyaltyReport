import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneUnloadingComponentComponent } from './phone-unloading-component.component';

describe('PhoneUnloadingComponentComponent', () => {
  let component: PhoneUnloadingComponentComponent;
  let fixture: ComponentFixture<PhoneUnloadingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneUnloadingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneUnloadingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
