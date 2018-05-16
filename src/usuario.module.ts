import { NgModule, ModuleWithProviders } from '@angular/core';
import { UsuariosComponent } from './components/usuario_component';
import { UsuarioProvider } from './providers/usuario_provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        UsuariosComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        UsuariosComponent
    ]
})
export class IonicUsuarioModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicUsuarioModule,
            providers: [UsuarioProvider]
        };
    }
}
