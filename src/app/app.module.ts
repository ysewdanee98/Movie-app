import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BodyComponent } from './components/body/body.component';
import { PopUpSettingComponent } from './components/pop-up-setting/pop-up-setting.component';
import { MovieService } from './providers/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterRatingComponent } from './components/filter-rating/filter-rating.component';
import { GenreComponent } from './components/genre/genre.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';
import { ApiComponent } from './components/api/api.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AuthenticationService } from './providers/authentication.service';
import { AuthenticationGuardService } from './providers/authentication-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    PopUpSettingComponent,
    FilterRatingComponent,
    GenreComponent,
    MovieDetailsComponent,
    SearchComponent,
    ApiComponent,
    HomeComponent,
    LoginComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    AuthenticationService,
    AuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
