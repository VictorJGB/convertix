import { NgModule } from '@angular/core';

// Components
import { CoinsTableComponent } from './coins-table/coins-table.component';
import { FooterComponent } from './footer/footer.component';
import { LogoIconComponent } from './icons/logo-icon/logo-icon.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [],
  imports: [
    ToolbarComponent,
    LogoIconComponent,
    FooterComponent,
    CoinsTableComponent,
  ],
  exports: [
    ToolbarComponent,
    LogoIconComponent,
    FooterComponent,
    CoinsTableComponent,
  ],
})
export class ComponentsModule {}
