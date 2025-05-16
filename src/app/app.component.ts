import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button1Component } from "./button1/button1.component";
import { DieCardComponent } from "./die-card/die-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PromptCardsComponent } from "./prompt-cards/prompt-cards.component";
import { TestPageComponent } from "./test-page/test-page.component";

export enum PageState {
    Home,
    Prompts,
    DiceRoller,
    Test,
}


@Component({
    selector: 'app-root',
    imports: [CommonModule, Button1Component, DieCardComponent, NavbarComponent, PromptCardsComponent, TestPageComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    pageState = PageState.Home;
    PS = PageState;

    changeState(newState: PageState): void {
        this.pageState = newState;
    }
}
