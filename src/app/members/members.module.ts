import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './components/list/list.component'
import { SummaryComponent } from './components/summary/summary.component'
import { TabsComponent } from './components/tabs/tabs.component'
import { RouterModule } from '@angular/router'
import { MembersService } from './services/members.service'

@NgModule({
  declarations: [ListComponent, SummaryComponent, TabsComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListComponent, SummaryComponent],
  providers: [MembersService],
})
export class MembersModule {}
