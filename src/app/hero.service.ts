import { Injectable } from '@angular/core';
import { Hero } from "../app/hero";
import { HEROES } from "../app/mock-heroes";
import { Observable, of } from "rxjs";
import { MessagesService } from "../app/messages.service";
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes() : Observable<Hero[]> {
    const heroes = of (HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessagesService) { }
}
