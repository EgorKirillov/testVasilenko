import { Component } from '@angular/core'
import { MembersService } from '../../../shared/services/members.service'
import { FinancialType, Members } from '../../../shared/models/members'
import { tabsNames } from 'src/app/data/tabs'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'ts-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  tabsNames: FinancialType[] = tabsNames
  members$: Observable<Members[]>
  filteredMembersCounts: Observable<number>[]

  constructor(private membersService: MembersService) {
    this.members$ = this.membersService.members$
    this.filteredMembersCounts = tabsNames.map(type => this.getFilteredMembersObservable(type))
  }

  private getFilteredMembersObservable(type: FinancialType): Observable<number> {
    return this.members$.pipe(map(members => members.filter(member => member.type === type).length))
  }
}
