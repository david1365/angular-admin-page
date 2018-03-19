import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkHeaderComponent } from './dk-header/dk-header.component';
import { DkWrapperComponent } from './dk-wrapper/dk-wrapper.component';
import { DkCircleButtonComponent } from './dk-circle-button/dk-circle-button.component';
import { DkSearchComponent } from './dk-search/dk-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DkWrapperComponent,
    DkHeaderComponent,
    DkCircleButtonComponent,
    DkSearchComponent
    ],
  declarations: [DkHeaderComponent, DkWrapperComponent, DkCircleButtonComponent, DkSearchComponent]
})
export class DaakModule {
}
