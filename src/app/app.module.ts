import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { en_US } from 'ng-zorro-antd/i18n'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import { IconsProviderModule } from './icons-provider.module'

import { NgZorroAntdModule } from 'ng-zorro-antd'
import en from '@angular/common/locales/en'

registerLocaleData(en)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IconsProviderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})

export class AppModule { }
