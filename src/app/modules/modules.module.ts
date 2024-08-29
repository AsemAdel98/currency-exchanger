import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  providers:[
    provideHttpClient(withFetch())
  ]
})
export class ModulesModule { }
