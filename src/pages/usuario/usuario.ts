import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../components/models/user';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  usuarioSelecionado: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuarioSelecionado = navParams.get('user')
  }
}
