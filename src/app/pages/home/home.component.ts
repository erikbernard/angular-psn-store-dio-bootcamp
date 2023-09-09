import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/gameModel';
import { BackendInterceptor } from 'src/app/services/backend-Interceptor';
import { GameService } from 'src/app/services/game.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listOptions: string[] = [
		"ps01",
		"ps02",
		"ps03",
		"ps04",
		"ps05",
		"ps06",
		"ps07",
		"ps08",
	]

	constructor(private gameService: GameService, private mockData: BackendInterceptor) { }
	listNewGames: Game[] = [];
	listPreSale: Game[] = [];
	listDemos: Game[] = [];
	ngOnInit(): void {
		this.getListPreSaleValue();
		this.getListDemosValue();
		this.getListNewGamesValue();
	}

	getListNewGamesValue(): void {
		this.gameService.getListNewGames().subscribe({
			next: data => {
				this.listNewGames = data;
			},
			error: error => {
				console.error('There was an error!', error);
			}, complete: () => {
				this.listNewGames = this.mockData.games;
			},
		})
	}
	getListPreSaleValue(): void {
		this.gameService.getListPreSale().subscribe({
			next: data => {
				this.listPreSale = data;
			},
			error: error => {
				console.error('There was an error!', error);
			}, complete: () => {
				this.listPreSale = this.mockData.games;
			},
		})
	}
	getListDemosValue(): void {
		this.gameService.getListDemos().subscribe({
			next: data => {
				this.listDemos = data;
			},
			error: error => {
				console.error('There was an error!', error);
			}, complete: () => {
				this.listDemos = this.mockData.games;
			},
		})
	}
}
