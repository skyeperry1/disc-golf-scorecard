import {Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayersService } from './players.service';

@Component({
	selector: 'players',
	template: `<h1>Players</h1>
		<li *ngFor="let player of players">
			<span>{{player.id}}</span>
			<span>{{player.name}}</span>
		</li>
	`
})

export class PlayersComponent implements OnInit {
	players : Player[];

	constructor( 
	private playersService: PlayersService ){}



	getPlayers(): void {
		this.playersService.getPlayers()
			.then(players =>
				this.players = players	
			);
	}

	ngOnInit(): void {
		this.getPlayers();
	}


}

