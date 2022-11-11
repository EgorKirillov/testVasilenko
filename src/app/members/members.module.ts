import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './list/list.component'
import { SummaryComponent } from './summary/summary.component'

@NgModule({
  declarations: [ListComponent, SummaryComponent],
  imports: [CommonModule],
  exports: [ListComponent, SummaryComponent],
})
export class MembersModule {}
