import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { DashboardPageComponent } from "./dashboard-page.component";
import { CommonModule } from "@angular/common";
import { DashboardTileModule } from './dashboard-tile/dashboard-tile.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardTileModule,
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardPageComponent}
        ])
    ],
    declarations: [DashboardPageComponent],
    providers: [],
    exports: [DashboardPageComponent]
})
export class DashboardModule {}
