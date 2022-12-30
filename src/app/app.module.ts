import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AlphabeticalListModule, TemplateContextTypeSafeModule } from './shared';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AlphabeticalListModule,
        TemplateContextTypeSafeModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
