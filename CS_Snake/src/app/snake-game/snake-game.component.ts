import { Component, OnInit } from '@angular/core';
import { SnakePixel } from '../models/snake-pixel';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit {
  pixels: SnakePixel[] = new Array();
  tempFlip: boolean = false;
  subscription: Subscription = new Subscription();

  constructor() {
    this.pixels = [];
  }

  ngOnInit(): void {
    const source = interval(800);
    this.subscription = source.subscribe(asdf => this.gameTick());
  }

  gameTick(): void {
    if (this.tempFlip === true) {
      this.tempFlip = false;
      // this.pixels.pop(); 
      this.pixels = [];
    } else {
      this.tempFlip = true;
      // this.pixels.push(new SnakePixel({x: 1, y: 1, type: 'head'}));
      // cant push to global array, need fix
      this.pixels = [new SnakePixel({x: 1, y: 1, type: 'head'})];
    }
  }
}
