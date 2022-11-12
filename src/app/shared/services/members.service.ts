import { Injectable } from '@angular/core'
import { FinancialType, Members } from '../models/members'
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs'
import { membersData } from '../../data/membersData'

@Injectable({ providedIn: 'root' })
export class MembersService {
  members$ = new BehaviorSubject<Members[]>([])
  private financialType$ = new BehaviorSubject<FinancialType>('investment')

  filteredMembers$: Observable<Members[]> = combineLatest([
    this.members$,
    this.financialType$,
  ]).pipe(map(([members, fType]) => members.filter(member => member.type === fType)))

  setFinancialType(type: FinancialType) {
    this.financialType$.next(type)
  }

  getMembers() {
    this.members$.next(membersData.data)
  }
}
