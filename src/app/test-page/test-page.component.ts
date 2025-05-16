import { Component } from '@angular/core';
import { Button1Component } from "../button1/button1.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
	selector: 'app-test-page',
	imports: [Button1Component, SearchBarComponent],
	templateUrl: './test-page.component.html',
	styleUrl: './test-page.component.css'
})
export class TestPageComponent {
	searchText: string = "";

	buttonPressed(): void {
		console.log("TEST Button pressed!");
	}

	updateSearch(search: string): void {
		this.searchText = search;
	}
}
