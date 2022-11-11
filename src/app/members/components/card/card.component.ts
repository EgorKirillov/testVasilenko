import { Component, Input, OnInit } from '@angular/core'
import { FinancialType } from '../../models/members'
import { MembersService } from '../../services/members.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'ts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private membersService: MembersService, private router: Router) {}

  @Input() type!: FinancialType
  @Input() index!: number

  count$!: Observable<number>
  count: number | undefined
  clickButtonHandler() {
    this.router.navigate(['navigator'], { queryParams: { tab: this.index } })
  }

  ngOnInit(): void {
    this.membersService.getFilteredMembersCount(this.type)
    this.count$ = this.membersService.filteredMembersLenght$
    this.count = this.membersService.filteredMembersLenght
  }
}
