import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardComponent } from './components/card/card.component'
import { SummaryComponent } from './components/summary/summary.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [CardComponent, SummaryComponent],
  imports: [CommonModule, RouterModule],
})
export class SummaryModule {}
