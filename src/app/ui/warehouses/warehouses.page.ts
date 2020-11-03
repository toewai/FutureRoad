import { Component, OnInit } from "@angular/core";
import { CRUD } from "../../decorators/mixIns";
import { WarehouseService } from "./../../service/warehouse/warehouse.service";
import { ModalController } from "@ionic/angular";
import { WarehousePage } from "../../modals/warehouse/warehouse.page";
@Component({
  selector: "app-warehouses",
  templateUrl: "./warehouses.page.html",
  styleUrls: ["./warehouses.page.scss"],
})
export class WarehousesPage implements OnInit {
  warehouse = CRUD(WarehouseService);
  warehouses = new this.warehouse();
  rows = [];
  constructor(public modalController: ModalController) {
    this.warehouses.find().then((data) => (this.rows = data));
  }
  ngOnInit() {}
  async presentModal(rowData?: any, isEdit?: any, isDelete?: any) {
    const modal = await this.modalController.create({
      component: WarehousePage,
      animated: true,
      componentProps: { getData: rowData, edit: isEdit, delete: isDelete },
    });
    modal.onDidDismiss().then((datas: any) => {
      const warehouseUpadate = new this.warehouse();
      warehouseUpadate.find().then((result) => (this.rows = result));
    });
    return await modal.present();
  }
  open(row) {
    console.log(row);
  }
}
