import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToolbarComponent],
  exports: [ToolbarComponent, CommonModule],
})
export class ComponentsModule {}
