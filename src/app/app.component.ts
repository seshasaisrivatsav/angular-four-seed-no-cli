import { Component, OnInit } from "@angular/core";

@Component({
    selector: "seed-app",
    template :'<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {}
}