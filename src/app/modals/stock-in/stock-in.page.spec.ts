import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockInPage } from './stock-in.page';

describe('StockInPage', () => {
  let component: StockInPage;
  let fixture: ComponentFixture<StockInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
