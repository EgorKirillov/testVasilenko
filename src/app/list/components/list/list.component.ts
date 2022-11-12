import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { Members } from '../../../shared/models/members'
import { MembersService } from '../../../shared/services/members.service'
import { tabsNames } from '../../../data/tabs'

@Component({
  selector: 'ts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private membersService: MembersService) {}

  queryParamSubscr!: Subscription
  members$!: Observable<Members[]>

  ngOnInit(): void {
    this.queryParamSubscr = this.route.queryParams.subscribe((param: Params) => {
      this.membersService.setFinancialType(tabsNames[param['tab']])
    })
    this.members$ = this.membersService.filteredMembers$
  }
  ngOnDestroy() {
    this.queryParamSubscr.unsubscribe()
  }
}
