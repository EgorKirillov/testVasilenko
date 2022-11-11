import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './components/list/list.component'
import { SummaryComponent } from './components/summary/summary.component'
import { TabsComponent } from './components/tabs/tabs.component'
import { RouterModule } from '@angular/router'
import { MembersService } from './services/members.service';
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [ListComponent, SummaryComponent, TabsComponent, CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListComponent, SummaryComponent],
  providers: [MembersService],
})
export class MembersModule {}
