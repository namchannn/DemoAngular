import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { allEmployeeComponent } from './allemployee/allemployee.component';
import { LondonComponent } from './location/london/london.component';
import { ParisComponent } from './location/paris/paris.component';
import { RomeComponent } from './location/rome/rome.component';
import { LocationComponent } from './location/location.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'search', component: SearchComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'london', component: LondonComponent},
  {path: 'rome', component: RomeComponent},
  {path: 'paris', component: ParisComponent},
  {path: 'allemployee', component: allEmployeeComponent},
  {path: 'location', component: LocationComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CartComponent,
    SearchComponent,
    DetailComponent,
    allEmployeeComponent,
    LondonComponent,
    ParisComponent,
    RomeComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
