import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockOutsPage } from './stock-outs.page';

describe('StockOutsPage', () => {
  let component: StockOutsPage;
  let fixture: ComponentFixture<StockOutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockOutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
