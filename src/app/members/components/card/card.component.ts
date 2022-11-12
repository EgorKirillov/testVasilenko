import { Component, Input } from '@angular/core'
import { FinancialType } from '../../models/members'

@Component({
  selector: 'ts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() type!: FinancialType
  @Input() count!: number | null
  @Input() index!: number
}
