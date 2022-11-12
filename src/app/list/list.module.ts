import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabsComponent } from './components/tabs/tabs.component'
import { ListComponent } from './components/list/list.component'
import { RouterModule } from '@angular/router'
import { ListRoutingModule } from './list-routing.module'

@NgModule({
  declarations: [TabsComponent, ListComponent],
  imports: [CommonModule, RouterModule, ListRoutingModule],
  exports: [ListComponent],
})
export class ListModule {}
