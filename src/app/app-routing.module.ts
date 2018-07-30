import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
    { path: 'cl-dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'cl-heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: 'cl-dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
