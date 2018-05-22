import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaUsuariosPage } from '../pages/lista-usuarios/lista-usuarios';
import { UsuarioPage } from '../pages/usuario/usuario';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaUsuariosPage,
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, 
      {
        links: [
          {component: HomePage, name: 'Home', segment: 'home'},
          {component: ListaUsuariosPage, name: 'ListaUsuarios', segment: 'lista-usuarios'},
          {component: UsuarioPage, name: 'Usuario', segment: 'usuario/:id'},
        ]
      }
    ),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaUsuariosPage,
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
