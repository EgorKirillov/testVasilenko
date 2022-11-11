import { Component, OnInit } from '@angular/core'
import { FinancialType } from '../../models/members'

@Component({
  selector: 'ts-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  tabsNames: FinancialType[] = ['income', 'outcome', 'loan', 'investment']

  ngOnInit(): void {}
}

//export type FinancialType = 'income' | 'outcome' | 'loan' | 'investment'
