import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    count: any = 0;
    count$: Observable<number> = this.heroService.count$;

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
            this.count = this.heroes.length - 1; // Heroes count for hidden hero
            this.heroService.setInitCount(this.count);
        });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.addHero({ name } as Hero).subscribe(hero => {
            this.heroes.push(hero);
            this.count = this.heroes.length - 1; // Heroes count for hidden hero
        });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe(() => {
            this.count = this.heroes.length - 1; // Heroes count for hidden hero
        });
    }

    ngOnInit() {
        this.getHeroes();
    }

}
