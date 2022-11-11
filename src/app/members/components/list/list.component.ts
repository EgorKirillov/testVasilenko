import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs'
import { FinancialType, Members } from '../../models/members'
import { MembersService } from '../../services/members.service'
import { tabsNames } from '../../../data/tabs'

@Component({
  selector: 'ts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private membersService: MembersService) {}
  queryParam: Params | undefined

  members$!: Observable<Members[]>

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: Params) => {
      let sortByType: FinancialType = 'income'
      this.queryParam = param
      sortByType = tabsNames[param['tab']]
      this.membersService.getFilteredMembers(sortByType)
    })
    this.members$ = this.membersService.filteredMembers$
  }
}
