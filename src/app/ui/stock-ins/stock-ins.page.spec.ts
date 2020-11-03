import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockInsPage } from './stock-ins.page';

describe('StockInsPage', () => {
  let component: StockInsPage;
  let fixture: ComponentFixture<StockInsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockInsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockInsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
