import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'ts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  queryParam: Params | undefined

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: Params) => {
      this.queryParam = param
    })
  }
}
