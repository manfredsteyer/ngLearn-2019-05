import { Component, OnInit } from '@angular/core';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';
import { LazyDashboardTileService } from './lazy-dashboard-tile.service';

@Component({
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

	constructor(
		private lazyService: LazyDashboardTileService,
		private externalService: ExternalDashboardTileService
	) { }


	addTile(): void {
		this._add('dashboard-tile');
	}

	private _add(elementName = 'dashboard-tile'): void {

		const data =	[
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100)
		];

		const content = document.getElementById('content');

		const tile = document.createElement(elementName);
		tile['a'] = data[0];
		tile['b'] = data[1];
		tile['c'] = data[2];

		tile.setAttribute('class', 'col-lg-4 col-md-3 col-sm-2');

		// tile.addEventListener('click', () => { });

		content.appendChild(tile);


		// TODO: Dynamically add a dashboard-tile element to the content
		//				 + set data's values to the attributes a, b, and c.
		// HINT: use document.createElement, setAttribute, and content.appendChild
		// HINT2: for the layout, assign the following classes: col-lg-4 col-md-3 col-sm-2

	}

	
	addLazy(): void {
		this.lazyService.load().then(_ => {
			this._add('lazy-dashboard-tile');
		});
	}

	addExternal(): void {
		this._add('external-dashboard-tile');
		this.externalService.load();
	}


}
