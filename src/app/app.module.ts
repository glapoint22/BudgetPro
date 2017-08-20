import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { AccountComponent } from './account/account.component';
import { EnvelopesComponent } from './envelopes/envelopes.component';
import { DisplayBarComponent } from './display-bar/display-bar.component';
import { EnvelopeGridComponent } from './envelope-grid/envelope-grid.component';
import { AccountGridComponent } from './account-grid/account-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    AccountComponent,
    EnvelopesComponent,
    DisplayBarComponent,
    EnvelopeGridComponent,
    AccountGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
