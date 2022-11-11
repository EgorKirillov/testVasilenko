import { Component, OnInit } from '@angular/core'
import { MembersService } from '../../services/members.service'
import { FinancialType } from '../../models/members'
import { tabsNames } from 'src/app/data/tabs'

@Component({
  selector: 'ts-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  constructor(private membersService: MembersService) {}

  totalCount: number | null = null
  tabsNames: FinancialType[] = tabsNames

  ngOnInit(): void {
    this.totalCount = this.membersService.getTotalCount()
  }
}
