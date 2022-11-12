import { Component } from '@angular/core'
import { tabsNames } from '../../../data/tabs'
import { ActivatedRoute } from '@angular/router'
import { map, Observable } from 'rxjs'
import { FinancialType } from '../../../shared/models/members'

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
