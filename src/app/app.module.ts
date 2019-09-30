import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSnackBarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ConfirmComponent} from './services/confirm/confirm.component';
import {NativePageTransitions} from '@ionic-native/native-page-transitions';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, ConfirmComponent],
  entryComponents: [ConfirmComponent],
  imports: [TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
    // tslint:disable-next-line:max-line-length
  }), BrowserModule, MatDialogModule, MatNativeDateModule, MatSnackBarModule, HttpClientModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule, MatButtonModule, MatIconModule, MatButtonToggleModule, MatCardModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [HeaderComponent]
})
export class AppModule {}
