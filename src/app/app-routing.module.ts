import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
