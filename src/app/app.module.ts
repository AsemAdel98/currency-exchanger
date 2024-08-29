import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { HeaderComponent } from "./shared/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalFunctionsService } from './shared/services/global-functions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModulesModule,
    HeaderComponent
  ],
  providers: [
    GlobalFunctionsService,
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
