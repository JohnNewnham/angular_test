import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button1',
    imports: [],
    templateUrl: './button1.component.html',
    styleUrl: './button1.component.css'
})
export class Button1Component {

    @Input() buttonText: string = "Button"
    @Output() buttonPressed = new EventEmitter();
    myBool: boolean = true;

    onClick(): void {
        this.buttonPressed.emit();
    }
}
