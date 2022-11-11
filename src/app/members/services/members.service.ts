import { Injectable } from '@angular/core'
import { FinancialType, Members } from '../models/members'
import { BehaviorSubject, map } from 'rxjs'
import { membersData } from '../../data/membersData'

@Injectable()
export class MembersService {
  constructor() {}

  members$ = new BehaviorSubject<Members[]>([])
  filteredMembers$ = new BehaviorSubject<Members[]>([])
  filteredMembersLenght$ = new BehaviorSubject<number>(3)

  get filteredMembersLenght() {
    return this.filteredMembersLenght$.getValue()
  }
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

  getFilteredMembersCount(type: FinancialType) {
    this.getMembers()
    this.members$
      .pipe(
        map(members => {
          return members.filter(m => m.type === type)
        })
      )
      .subscribe(members => {
        console.log(members)
        this.filteredMembersLenght$.next(members.length)
      })
  }

  getTotalCount() {
    return membersData.total
  }
}
