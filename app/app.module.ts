import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeWorldComponent } from './see-world/see-world.component';
import { SeeWorldSecondComponent } from './see-world-second/see-world-second.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeWorldComponent,
    SeeWorldSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
