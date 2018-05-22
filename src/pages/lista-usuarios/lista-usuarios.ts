import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../components/models/user';
import { users } from '../../app/data';

@IonicPage()
@Component({
  selector: 'page-lista-usuarios',
  templateUrl: 'lista-usuarios.html',
})
export class ListaUsuariosPage {
  text: string;
  users: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.users = users;
  }

  click(user: User) {
    this.navCtrl.push('Usuario', { user, 'id': user.id });
  }

}
