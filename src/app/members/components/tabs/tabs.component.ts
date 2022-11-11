import { Component, OnInit } from '@angular/core'
import { FinancialType } from '../../models/members'
import { tabsNames } from '../../../data/tabs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ts-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  tabsNames: FinancialType[] = tabsNames
  currentLink: number = 0

  changeCurrent(i: number) {
    this.currentLink = i
  }

  ngOnInit(): void {
    this.currentLink = Number(this.route.snapshot.queryParamMap.get('tab'))
  }
}
