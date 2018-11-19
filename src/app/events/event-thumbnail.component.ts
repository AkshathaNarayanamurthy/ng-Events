import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbmail',
    templateUrl: './event-thumbnail.component.html'
})

export class EventThumbnailComponent {
    @Input() eventInput: any;
    @Output() eventOutput = new EventEmitter<any>();

    handleClick() {
        this.eventOutput.emit(this.eventInput.name);
    }

    logInfo(){
        console.log('Info from the child');
    }
}