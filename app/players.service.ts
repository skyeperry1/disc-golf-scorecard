import { Injectable } from '@angular/core';
import { Player } from './player';

import { PLAYERS } from './mock-players';

@Injectable()

export class PlayersService{
	//Gets the list of players
	getPlayers(): Promise<Player[]>{
		return Promise.resolve(PLAYERS);
	}

}

	