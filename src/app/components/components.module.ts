import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoIconComponent } from './icons/logo-icon/logo-icon.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToolbarComponent, LogoIconComponent],
  exports: [ToolbarComponent, CommonModule, LogoIconComponent],
})
export class ComponentsModule {}
