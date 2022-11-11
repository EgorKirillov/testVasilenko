import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './components/list/list.component'
import { SummaryComponent } from './components/summary/summary.component'
import { TabsComponent } from './components/tabs/tabs.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [ListComponent, SummaryComponent, TabsComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListComponent, SummaryComponent],
})
export class MembersModule {}
