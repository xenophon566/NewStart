import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        HeroSearchComponent,
        DashboardComponent
    ]
})
export class DashboardModule { }
