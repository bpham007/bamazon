import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { PageContentComponent } from './page-content/page-content.component';
import { RhfComponent } from './rhf/rhf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    FooterComponent,
    Header2Component,
    PageContentComponent,
    RhfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
