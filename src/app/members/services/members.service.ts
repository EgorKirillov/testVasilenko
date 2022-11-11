import { Injectable } from '@angular/core'
import { FinancialType, Members } from '../models/members'
import { BehaviorSubject, map } from 'rxjs'
import { membersData } from '../../data/membersData'

@Injectable()
export class MembersService {
  constructor() {}

  members$ = new BehaviorSubject<Members[]>([])
  filteredMembers$ = new BehaviorSubject<Members[]>([])

  getMembers() {
    this.members$.next(membersData.data)
    console.log('get all members')
  }

  getFilteredMembers(type: FinancialType) {
    this.getMembers()
    this.members$
      .pipe(map(members => members.filter(m => m.type === type)))
      .subscribe(value => this.filteredMembers$.next(value))
  }

  getFilteredMembersCount(): number {
    return this.filteredMembers$.getValue().length
  }
}
