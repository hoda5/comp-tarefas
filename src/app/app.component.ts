import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { User } from '../components/models/user';
import { users } from './data';
import { global } from './global'
import { ListaUsuariosPage } from '../pages/lista-usuarios/lista-usuarios';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  userLogged: String;
  users: User[];

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.userLogged = "maria";
    this.users = users;

    let usuario = this.users.find((user) => user.nome == this.userLogged);

    if(usuario)
      global.setUsuarioLogado(usuario);

    if(global.getUsuarioLogado()) {
      this.rootPage = ListaUsuariosPage;
    }
    else {
      this.rootPage = HomePage;
    }
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

