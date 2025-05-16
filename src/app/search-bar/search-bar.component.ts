import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
	selector: 'app-search-bar',
	imports: [FormsModule],
	templateUrl: './search-bar.component.html',
	styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnChanges {

	@Input() placeholder = "Search";
	@Output() searchText = new EventEmitter()
	inputText: string = "";

	ngOnChanges(changes: SimpleChanges): void {
		this.searchText.pipe(
			debounceTime(250)
		)
	}
}
