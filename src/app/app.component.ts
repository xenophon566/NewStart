import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        public messageService: MessageService,
        public heroService: HeroService
    ) { }

    count$: Observable<number> = this.heroService.count$;

    title = 'Careline - Tour of Heroes';

}
