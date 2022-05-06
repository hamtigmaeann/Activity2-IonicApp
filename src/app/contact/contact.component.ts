import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class  ContactComponent {

  contactlist  = [
    {id: 1, name: 'Mae Ann Brazil Hamtig', email: 'maeann.hamtigii@evsu.edu.ph',number: '09109955229'}
  ]
  constructor(public alertController: AlertController, public router: Router) {
  }
  redirectTo() {
    this.router.navigateByUrl('/mailpage');
  }
  async  confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
              this.contactlist.splice(index, 1);
              this.showAlert();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }
  async showAlert() {
    const alert = this.alertController.create({
      header: 'Youve Successfully Deleted!',
      buttons: ['OK'],
      
    });
    (await alert).present();
  }


  async addUser() {
    let prompt = await this.alertController.create({
      header: 'New Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter Your Name',
        },{
          name: 'email',
          placeholder: 'Enter Your Email'
        },
        {
          name: 'number',
          placeholder: 'Enter Your Number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');
            
          this.contactlist.push({
            id: data.id,
            name: data.name,
            email: data.email,
            number: data.number
          });
     
          }
        }
      ]
    });
    await prompt.present();

  }


}