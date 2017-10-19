import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { ROUTING } from "./app.routing";

import { HomeComponent } from "./components/home/home.component";

@NgModule({
    imports: [
        BrowserModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}