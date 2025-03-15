import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button1Component } from "./button1/button1.component";
import { DieCardComponent } from "./die-card/die-card.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Button1Component, DieCardComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'angular_test';
}
