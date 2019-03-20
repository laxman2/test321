import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
// import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
// import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
// import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
// import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
// import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
// import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';


import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
import { SlideOutComponent } from './slide-out/slide-out.component';

// import { CountryOrdersComponent } from './country-orders/country-orders.component';
// import { CountryOrdersMapComponent } from './country-orders/map/country-orders-map.component';
// import { CountryOrdersMapService } from './country-orders/map/country-orders-map.service';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import { CountryOrdersChartComponent } from './country-orders/chart/country-orders-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    // LeafletModule,
  ],
  declarations: [
    ECommerceComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    // CountryOrdersComponent,
    // CountryOrdersMapComponent,
    // CountryOrdersChartComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
  ],
  providers: [
    // CountryOrdersMapService,
  ],
})
export class ECommerceModule { }
