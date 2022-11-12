import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SummaryComponent } from './members/components/summary/summary.component'
import { ListComponent } from './members/components/list/list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: SummaryComponent, pathMatch: 'full' },
  { path: 'navigator', component: ListComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
