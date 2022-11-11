import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    TabsComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
