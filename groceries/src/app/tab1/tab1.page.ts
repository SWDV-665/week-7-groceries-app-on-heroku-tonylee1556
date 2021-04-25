import { Component } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //title for the app
  title = "Grocery list"
  //list of items
  items = [];
  errormessages: string;
  //constructor
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public alertController: AlertController, public dataservice: GroceriesServiceService, public socialSharing: SocialSharing) {
    this.ionViewDidLoad();
    dataservice.dataChanged$.subscribe((dataChanged: boolean) => {

      this.loaditems();
    });
  }
  ionViewDidLoad() {
    console.log("loaded");
    this.loaditems();
  }
  loaditems() {
    console.log("inside function");
    
    this.dataservice.getItem().subscribe(
      items => this.items = items,
      error => this.errormessages = <any>error
    );
    console.log(this.items);
  }

  numberOfItem() {
    // return this.dataservice.getItem().length;
  }

  //removing items function
  async removeItem(item, index) {
    this.dataservice.removeItem(index);
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    toast.present();

  }
  async shareitems(item, index) {
    console.log("item shared");
    const toast = await this.toastCtrl.create({
      message: 'shared item -' + item.name + "..",
      duration: 3000
    });
    toast.present();
    let message = "shared item: " + item.name + "quantity: " + item.quantity;
    let subject = "shared via ionic app";
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("shared successfully");
    }).catch((err) => {
      // Sharing via email is not possible
      console.log(err);
    });
  }
  edititems(item, index) {
    console.log("editing item -");
    this.editItemPrompt(item, index);
  }
  //adding function that is calling addItemPrompt for detail input
  addItem() {
    console.log("Removing Item - ");
    this.addItemPrompt();
  }

  async editItemPrompt(item, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input Item Detail',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'NAME',
          value: item.name
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          placeholder: 'QUANTITY',
          value: item.quantity
        }], buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: item => {
              console.log('Confirm Ok', item);
              this.dataservice.editItem(item, index);
            }
          }
        ]
    });
    await alert.present();
  }

  async addItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input Item Detail',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'NAME'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          placeholder: 'QUANTITY'
        }], buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: item => {
              console.log('Confirm Ok', item);
              this.dataservice.addItem(item);
            }
          }
        ]
    });
    await alert.present();
  }
}
