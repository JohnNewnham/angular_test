import { Component, Output, EventEmitter } from '@angular/core';
import { PageState } from '../app.component';

@Component({
	selector: 'app-navbar',
	imports: [],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	@Output() navbarEmitter = new EventEmitter<PageState>();
	PS = PageState;

	changeState(newState: PageState): void {
		this.navbarEmitter.emit(newState);
	}
}
