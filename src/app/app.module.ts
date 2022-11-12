import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListModule } from './list/list.module'
import { SummaryModule } from './summary/summary.module'
import { PageNotFoundModule } from './page-not-found/page-not-found.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ListModule, SummaryModule, PageNotFoundModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
