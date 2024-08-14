import { NgModule } from '@angular/core';

// Components
import { ConvertResultCardComponent } from './convert-result-card/convert-result-card.component';
import { FooterComponent } from './footer/footer.component';
import { LogoIconComponent } from './icons/logo-icon/logo-icon.component';
import { CoinsTableComponent } from './tables/coins-table/coins-table.component';
import { HistoryTableComponent } from './tables/history-table/history-table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [],
  imports: [
    ToolbarComponent,
    LogoIconComponent,
    FooterComponent,
    ConvertResultCardComponent,
    CoinsTableComponent,
    HistoryTableComponent

  ],
  exports: [
    ToolbarComponent,
    LogoIconComponent,
    FooterComponent,
    CoinsTableComponent,
    ConvertResultCardComponent,
    HistoryTableComponent
  ],
})
export class ComponentsModule {}
