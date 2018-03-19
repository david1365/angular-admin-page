import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkHeaderComponent } from './dk-header/dk-header.component';
import { DkWrapperComponent } from './dk-wrapper/dk-wrapper.component';
import { DkCircleButtonComponent } from './dk-circle-button/dk-circle-button.component';
import { DkSearchComponent } from './dk-search/dk-search.component';
import { DkDesktopIconComponent } from './dk-desktop-icon/dk-desktop-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DkWrapperComponent,
    DkHeaderComponent,
    DkCircleButtonComponent,
    DkSearchComponent,
    DkDesktopIconComponent
  ],
  declarations: [DkHeaderComponent, DkWrapperComponent, DkCircleButtonComponent, DkSearchComponent, DkDesktopIconComponent]
})
export class DaakModule {
}
