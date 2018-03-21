import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DkWrapperComponent} from './components/dk-wrapper/dk-wrapper.component';
import {DkCircleButtonComponent} from './components/dk-circle-button/dk-circle-button.component';
import {DkSearchComponent} from './components/dk-search/dk-search.component';
import {DkDesktopIconComponent} from './components/dk-desktop-icon/dk-desktop-icon.component';
import {DkLogoBrandComponent} from './components/dk-logo-brand/dk-logo-brand.component';
import {DkHeaderComponent} from './components/dk-header/dk-header.component';
import {DaakService} from './services/daak.service';
import { DkUserDetailsComponent } from './components/dk-user-details/dk-user-details.component';
import { DkCircleMenuComponent } from './components/dk-circle-menu/dk-circle-menu.component';

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
    DkLogoBrandComponent,
    DkUserDetailsComponent,
    DkCircleMenuComponent
  ],
  declarations: [
    DkHeaderComponent,
    DkWrapperComponent,
    DkCircleButtonComponent,
    DkSearchComponent,
    DkDesktopIconComponent,
    DkLogoBrandComponent,
    DkUserDetailsComponent,
    DkCircleMenuComponent
  ],
  providers: [
    DaakService
  ],
})
export class DaakModule {
}
