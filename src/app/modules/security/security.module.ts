import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './pages/login/login.component';
import {SecurityRoutingModule} from './security.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})

export class SecurityModule {
}
