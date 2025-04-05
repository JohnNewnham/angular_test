import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button1Component } from "./button1/button1.component";
import { DieCardComponent } from "./die-card/die-card.component";
import { NavbarComponent } from "./navbar/navbar.component";

export enum PageState {
    Home,
    Prompts,
    DiceRoller,
    Test,
}


@Component({
    selector: 'app-root',
    imports: [CommonModule, Button1Component, DieCardComponent, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'angular_test';
    pageState = PageState.Home;
    PS = PageState;

    buttonPressed(): void {
        console.log("TEST Button pressed!");
    }

    changeState(newState: PageState): void {
        this.pageState = newState;
    }
}
