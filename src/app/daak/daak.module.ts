import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DkWrapperComponent} from './components/dk-wrapper/dk-wrapper.component';
import {DkCircleButtonComponent} from './components/dk-circle-button/dk-circle-button.component';
import {DkSearchComponent} from './components/dk-search/dk-search.component';
import {DkDesktopIconComponent} from './components/dk-desktop-icon/dk-desktop-icon.component';
import {DkLogoBrandComponent} from './components/dk-logo-brand/dk-logo-brand.component';
import {DkHeaderComponent} from './components/dk-header/dk-header.component';
import {CssAnimateService} from './services/css-animate.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DkWrapperComponent,
    DkHeaderComponent,
    DkCircleButtonComponent,
    DkSearchComponent,
    DkDesktopIconComponent,
    DkLogoBrandComponent
  ],
  declarations: [
    DkHeaderComponent,
    DkWrapperComponent,
    DkCircleButtonComponent,
    DkSearchComponent,
    DkDesktopIconComponent,
    DkLogoBrandComponent
  ],
  providers: [
    CssAnimateService
  ],
})
export class DaakModule {
}
