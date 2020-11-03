import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarehousesPage } from './warehouses.page';

describe('WarehousesPage', () => {
  let component: WarehousesPage;
  let fixture: ComponentFixture<WarehousesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarehousesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
