import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabsComponent } from './tabs/tabs.component'
import { CardComponent } from './card/card.component'
import { ListElementComponent } from './list-element/list-element.component'

@NgModule({
  declarations: [TabsComponent, CardComponent, ListElementComponent],
  exports: [TabsComponent, CardComponent],
  imports: [CommonModule],
})
export class SharedModule {}
