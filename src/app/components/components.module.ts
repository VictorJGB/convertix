import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { LogoIconComponent } from './icons/logo-icon/logo-icon.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [],
  imports: [ToolbarComponent, LogoIconComponent, FooterComponent],
  exports: [ToolbarComponent, LogoIconComponent, FooterComponent],
})
export class ComponentsModule {}
