import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-die-card',
	standalone: true,
	imports: [],
	templateUrl: './die-card.component.html',
	styleUrl: './die-card.component.css'
})
export class DieCardComponent {

	@Input() sides: number = 6;
}
