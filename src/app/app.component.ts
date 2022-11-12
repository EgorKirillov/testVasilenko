import { Component, OnInit } from '@angular/core'
import { MembersService } from './shared/services/members.service'

@Component({
  selector: 'ts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test01'
  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.membersService.getMembers()
  }
}
