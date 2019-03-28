import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorsComponent } from './elevators.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ElevatorsService } from '../services/elevators.service';

const mockService = {
  getAll() {
    const elevators = [{id: 1}, {id:2}];
    return of( elevators );
  }
};

describe('ElevatorsComponent', () => {
  let component: ElevatorsComponent;
  let fixture: ComponentFixture<ElevatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevatorsComponent ],
      providers: [{provide: ElevatorsService, useValue: mockService}],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get elevators data from observable on init', () => {
    expect(component.elevators.length).toBe(2);
  });
});
