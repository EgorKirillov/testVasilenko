import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
