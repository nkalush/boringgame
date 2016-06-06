const maps = {
	test: {
		width:20,
		height:20,
		objects: [
			{
				x: 2,
				y: 1,
				width: 1,
				height: 2,
			},
			{
				x: 15,
				y: 10,
				width: 3,
				height: 1,
			}
		]
	}
};

const map = (el) => {
	const clearMap = function () {
		while (el.hasChildNodes()) {
		    el.removeChild(el.lastChild);
		}
	};

	const addObjects = function (map) {
		for (var i = map.objects.length - 1; i >= 0; i--) {
			var obj = document.createElement('rpg-object');
			obj.style.left = map.objects[i].x + 'em';
			obj.style.top = map.objects[i].y + 'em';
			obj.style.width = map.objects[i].width + 'em';
			obj.style.height = map.objects[i].height + 'em';

			el.appendChild(obj);
		}
	};

	return {
		map: null,
		change: function (name) {
			this.map = maps[name];
			el.style.width = maps[name].width + 'em';
			el.style.height = maps[name].height + 'em';
			el.style.marginLeft = 0;
			el.style.marginTop = 0;
			clearMap();
			addObjects(this.map);
		},
		setCenter: function (x, y) {
			el.style.marginLeft = (x * -1) + 'em';
			el.style.marginTop = (y * -1) + 'em';
		},
		collision: function (x, y) {
			var collides = false,
				i,
				xCollision,
				yCollision;
			for (i = this.map.objects.length - 1; i >= 0; i--) {
				xCollision = x >= this.map.objects[i].x && x < (this.map.objects[i].x + this.map.objects[i].width);
				yCollision = y >= this.map.objects[i].y && y < (this.map.objects[i].y + this.map.objects[i].height);

				if (xCollision && yCollision) {
					collides = true;
				}
			}
			return collides;
		}
	}
};

const worldmap = map(document.getElementById('worldmap'));

//==================================================================================
// Actor Object
//==================================================================================
const npc = {
  move: (x, y) => {
  	state.el.style.left = x + 'em';
	state.el.style.top = y + 'em';
  }
};

const pc = {
	move: (x, y) => {
		worldmap.setCenter(x, y);
	}
};

const actor = (state, move) => ({

	move: (direction, speed) => {
		let normalDelay = 150,
			fastDelay = 75,
			x = state.x,
			y = state.y;

		if (!state.moving) {

			switch (direction) {
				case 'left':
					x = x > 0 ? x - 1 : 0;
					break;
				case 'right':
					x = x < worldmap.map.width - 1 ? x + 1 : worldmap.map.width - 1;
					break;
				case 'up':
					y = y > 0 ? y - 1 : 0;
					break;
				case 'down':
					y = y < worldmap.map.height - 1 ? y + 1 : worldmap.map.height - 1;
					break;
			}
			if (!worldmap.collision(x, y)) {
				state.moving = true;
				state.x = x;
				state.y = y;
				move(state.x, state.y);
				setTimeout(function () {
					state.moving = false;
				}, speed == 'fast' ? fastDelay : normalDelay);
			}
		}
	}
});

let playerState = {
	el: document.getElementById('player'),
	x: 1,
	y: 1,
	moving:false
}

const player = Object.assign(
	{},
	actor(playerState, pc.move)
);

//==================================================================================
// Keyboard Event Handling
//==================================================================================
window.addEventListener('keydown', function (e) {
	let speed = e.shiftKey ? 'fast' : 'normal';

    switch (e.key)
    {
    	case 'w':
    	case 'ArrowUp':
    		player.move('up', speed);
    		e.preventDefault();
    		return false;
    		break;
    	case 'a':
    	case 'ArrowLeft':
    		player.move('left', speed);
    		e.preventDefault();
    		return false;
    		break;
    	case 's':
    	case 'ArrowDown':
    		player.move('down', speed);
    		e.preventDefault();
    		return false;
    		break;
    	case 'd':
    	case 'ArrowRight':
    		console.log();
    		player.move('right', speed);
    		e.preventDefault();
    		return false;
    		break;
    }

}, false);


//Set the map as test
worldmap.change('test');
worldmap.setCenter(playerState.x, playerState.y);