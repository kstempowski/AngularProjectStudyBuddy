import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
<<<<<<< HEAD
import { QandAListComponent } from './qand-alist/qand-alist.component';
=======
import { QandAComponent } from './qand-a/qand-a.component';
import { AddQandAComponent } from './add-qand-a/add-qand-a.component';
>>>>>>> 7df6f71781b1755d22ba8e68b00fc27aeb1779fb

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
<<<<<<< HEAD
    QandAListComponent
=======
    QandAComponent,
    AddQandAComponent
>>>>>>> 7df6f71781b1755d22ba8e68b00fc27aeb1779fb
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'qand-a', component: QandAComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
