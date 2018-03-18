import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkHeaderComponent } from './dk-header/dk-header.component';
import { DkWrapperComponent } from './dk-wrapper/dk-wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DkWrapperComponent,
    DkHeaderComponent
    ],
  declarations: [DkHeaderComponent, DkWrapperComponent]
})
export class DaakModule {
}
