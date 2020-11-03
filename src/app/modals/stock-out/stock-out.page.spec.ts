import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockOutPage } from './stock-out.page';

describe('StockOutPage', () => {
  let component: StockOutPage;
  let fixture: ComponentFixture<StockOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
