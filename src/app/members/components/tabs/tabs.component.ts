import { Component } from '@angular/core'
import { FinancialType } from '../../models/members'
import { tabsNames } from '../../../data/tabs'
import { ActivatedRoute } from '@angular/router'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'ts-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  tabsNames: FinancialType[] = tabsNames
  currentLink: number = 0
  currentTabIndex: Observable<string>

  constructor(private route: ActivatedRoute) {
    this.currentTabIndex = route.queryParams.pipe(map(param => param['tab']))
  }
}
