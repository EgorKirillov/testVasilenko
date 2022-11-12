import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { SummaryComponent } from './components/summary/summary.component'

const routes: Routes = [{ path: '', component: SummaryComponent, pathMatch: 'full' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryRoutingModule {}
