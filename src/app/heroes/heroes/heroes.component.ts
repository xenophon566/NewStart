import { Component, OnInit } from '@angular/core';
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

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
            this.count = this.heroes.length - 1; // Heroes count
            document.getElementById("heroQty").innerHTML = this.count;
        });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.addHero({ name } as Hero).subscribe(hero => {
            this.heroes.push(hero);
            this.count = this.heroes.length - 1; // Heroes count
            document.getElementById("heroQty").innerHTML = this.count;
        });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe(() => {
            this.count = this.heroes.length - 1; // Heroes count
            document.getElementById("heroQty").innerHTML = this.count;
        });
    }

}
