import { NgModule } from '@angular/core';

// Pages
import { CoinsPageComponent } from './coins-page/coins-page.component';
import { ConverterPageComponent } from './converter-page/converter-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [],
  imports: [
    HomePageComponent,
    CoinsPageComponent,
    HistoryPageComponent,
    ConverterPageComponent,
  ],
  exports: [
    HomePageComponent,
    CoinsPageComponent,
    HistoryPageComponent,
    ConverterPageComponent,
  ],
})
export class PagesModule {}
