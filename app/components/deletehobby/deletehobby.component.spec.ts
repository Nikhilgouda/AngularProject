import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletehobbyComponent } from './deletehobby.component';

describe('DeletehobbyComponent', () => {
  let component: DeletehobbyComponent;
  let fixture: ComponentFixture<DeletehobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletehobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletehobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
