import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear(qty: 0) {
        if (confirm('Do you really want to clear?')) {
            if (!!qty) for (let i = 0; i < qty; i++) this.messages.shift();
            else this.messages = [];
        }
    }
}
