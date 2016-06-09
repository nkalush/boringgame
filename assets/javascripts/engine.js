const objects = {
	talltestobject: {tileset: 'talltestobject.svg', width: 1, height:4},
	shorttestobject: {tileset: 'shorttestobject.svg', width: 1, height:2},
	shorttesttable: {tileset: 'shorttesttable.svg', width: 1, height:2}
}

const maps = {
	test: {
		width:20,
		height:20,
		floor: [
			{x: 1, y: 0, tileset: 'testtile.svg'},
			{x: 2, y: 0, tileset: 'testtile.svg'},
			{x: 3, y: 0, tileset: 'testtile.svg'},
			{x: 4, y: 0, tileset: 'testtile.svg'},
			{x: 5, y: 0, tileset: 'testtile.svg'},
			{x: 6, y: 0, tileset: 'testtile.svg'},
			{x: 7, y: 0, tileset: 'testtile.svg'},
			{x: 8, y: 0, tileset: 'testtile.svg'},
			{x: 9, y: 0, tileset: 'testtile.svg'},
			{x: 10, y: 0, tileset: 'testtile.svg'},
			{x: 11, y: 0, tileset: 'testtile.svg'},
			{x: 12, y: 0, tileset: 'testtile.svg'},
			{x: 13, y: 0, tileset: 'testtile.svg'},
			{x: 14, y: 0, tileset: 'testtile.svg'},
			{x: 15, y: 0, tileset: 'testtile.svg'},
			{x: 16, y: 0, tileset: 'testtile.svg'},
			{x: 17, y: 0, tileset: 'testtile.svg'},
			{x: 18, y: 0, tileset: 'testtile.svg'},
			{x: 19, y: 0, tileset: 'testtile.svg'},
			{x: 0, y: 0, tileset: 'testtile.svg'},

			{x: 1, y: 1, tileset: 'testtile.svg'},
			{x: 2, y: 1, tileset: 'testtile.svg'},
			{x: 3, y: 1, tileset: 'testtile.svg'},
			{x: 4, y: 1, tileset: 'testtile.svg'},
			{x: 5, y: 1, tileset: 'testtile.svg'},
			{x: 6, y: 1, tileset: 'testtile.svg'},
			{x: 7, y: 1, tileset: 'testtile.svg'},
			{x: 8, y: 1, tileset: 'testtile.svg'},
			{x: 9, y: 1, tileset: 'testtile.svg'},
			{x: 10, y: 1, tileset: 'testtile.svg'},
			{x: 11, y: 1, tileset: 'testtile.svg'},
			{x: 12, y: 1, tileset: 'testtile.svg'},
			{x: 13, y: 1, tileset: 'testtile.svg'},
			{x: 14, y: 1, tileset: 'testtile.svg'},
			{x: 15, y: 1, tileset: 'testtile.svg'},
			{x: 16, y: 1, tileset: 'testtile.svg'},
			{x: 17, y: 1, tileset: 'testtile.svg'},
			{x: 18, y: 1, tileset: 'testtile.svg'},
			{x: 19, y: 1, tileset: 'testtile.svg'},
			{x: 0, y: 1, tileset: 'testtile.svg'},

			{x: 1, y: 2, tileset: 'testtile.svg'},
			{x: 2, y: 2, tileset: 'testtile.svg'},
			{x: 3, y: 2, tileset: 'testtile.svg'},
			{x: 4, y: 2, tileset: 'testtile.svg'},
			{x: 5, y: 2, tileset: 'testtile.svg'},
			{x: 6, y: 2, tileset: 'testtile.svg'},
			{x: 7, y: 2, tileset: 'testtile.svg'},
			{x: 8, y: 2, tileset: 'testtile.svg'},
			{x: 9, y: 2, tileset: 'testtile.svg'},
			{x: 10, y: 2, tileset: 'testtile.svg'},
			{x: 11, y: 2, tileset: 'testtile.svg'},
			{x: 12, y: 2, tileset: 'testtile.svg'},
			{x: 13, y: 2, tileset: 'testtile.svg'},
			{x: 14, y: 2, tileset: 'testtile.svg'},
			{x: 15, y: 2, tileset: 'testtile.svg'},
			{x: 16, y: 2, tileset: 'testtile.svg'},
			{x: 17, y: 2, tileset: 'testtile.svg'},
			{x: 18, y: 2, tileset: 'testtile.svg'},
			{x: 19, y: 2, tileset: 'testtile.svg'},
			{x: 0, y: 2, tileset: 'testtile.svg'},

			{x: 1, y: 3, tileset: 'testtile.svg'},
			{x: 2, y: 3, tileset: 'testtile.svg'},
			{x: 3, y: 3, tileset: 'testtile.svg'},
			{x: 4, y: 3, tileset: 'testtile.svg'},
			{x: 5, y: 3, tileset: 'testtile.svg'},
			{x: 6, y: 3, tileset: 'testtile.svg'},
			{x: 7, y: 3, tileset: 'testtile.svg'},
			{x: 8, y: 3, tileset: 'testtile.svg'},
			{x: 9, y: 3, tileset: 'testtile.svg'},
			{x: 10, y: 3, tileset: 'testtile.svg'},
			{x: 11, y: 3, tileset: 'testtile.svg'},
			{x: 12, y: 3, tileset: 'testtile.svg'},
			{x: 13, y: 3, tileset: 'testtile.svg'},
			{x: 14, y: 3, tileset: 'testtile.svg'},
			{x: 15, y: 3, tileset: 'testtile.svg'},
			{x: 16, y: 3, tileset: 'testtile.svg'},
			{x: 17, y: 3, tileset: 'testtile.svg'},
			{x: 18, y: 3, tileset: 'testtile.svg'},
			{x: 19, y: 3, tileset: 'testtile.svg'},
			{x: 0, y: 3, tileset: 'testtile.svg'},

			{x: 1, y: 4, tileset: 'testtile.svg'},
			{x: 2, y: 4, tileset: 'testtile.svg'},
			{x: 3, y: 4, tileset: 'testtile.svg'},
			{x: 4, y: 4, tileset: 'testtile.svg'},
			{x: 5, y: 4, tileset: 'testtile.svg'},
			{x: 6, y: 4, tileset: 'testtile.svg'},
			{x: 7, y: 4, tileset: 'testtile.svg'},
			{x: 8, y: 4, tileset: 'testtile.svg'},
			{x: 9, y: 4, tileset: 'testtile.svg'},
			{x: 10, y: 4, tileset: 'testtile.svg'},
			{x: 11, y: 4, tileset: 'testtile.svg'},
			{x: 12, y: 4, tileset: 'testtile.svg'},
			{x: 13, y: 4, tileset: 'testtile.svg'},
			{x: 14, y: 4, tileset: 'testtile.svg'},
			{x: 15, y: 4, tileset: 'testtile.svg'},
			{x: 16, y: 4, tileset: 'testtile.svg'},
			{x: 17, y: 4, tileset: 'testtile.svg'},
			{x: 18, y: 4, tileset: 'testtile.svg'},
			{x: 19, y: 4, tileset: 'testtile.svg'},
			{x: 0, y: 4, tileset: 'testtile.svg'},

			{x: 1, y: 5, tileset: 'testtile.svg'},
			{x: 2, y: 5, tileset: 'testtile.svg'},
			{x: 3, y: 5, tileset: 'testtile.svg'},
			{x: 4, y: 5, tileset: 'testtile.svg'},
			{x: 5, y: 5, tileset: 'testtile.svg'},
			{x: 6, y: 5, tileset: 'testtile.svg'},
			{x: 7, y: 5, tileset: 'testtile.svg'},
			{x: 8, y: 5, tileset: 'testtile.svg'},
			{x: 9, y: 5, tileset: 'testtile.svg'},
			{x: 10, y: 5, tileset: 'testtile.svg'},
			{x: 11, y: 5, tileset: 'testtile.svg'},
			{x: 12, y: 5, tileset: 'testtile.svg'},
			{x: 13, y: 5, tileset: 'testtile.svg'},
			{x: 14, y: 5, tileset: 'testtile.svg'},
			{x: 15, y: 5, tileset: 'testtile.svg'},
			{x: 16, y: 5, tileset: 'testtile.svg'},
			{x: 17, y: 5, tileset: 'testtile.svg'},
			{x: 18, y: 5, tileset: 'testtile.svg'},
			{x: 19, y: 5, tileset: 'testtile.svg'},
			{x: 0, y: 5, tileset: 'testtile.svg'},

			{x: 1, y: 6, tileset: 'testtile.svg'},
			{x: 2, y: 6, tileset: 'testtile.svg'},
			{x: 3, y: 6, tileset: 'testtile.svg'},
			{x: 4, y: 6, tileset: 'testtile.svg'},
			{x: 5, y: 6, tileset: 'testtile.svg'},
			{x: 6, y: 6, tileset: 'testtile.svg'},
			{x: 7, y: 6, tileset: 'testtile.svg'},
			{x: 8, y: 6, tileset: 'testtile.svg'},
			{x: 9, y: 6, tileset: 'testtile.svg'},
			{x: 10, y: 6, tileset: 'testtile.svg'},
			{x: 11, y: 6, tileset: 'testtile.svg'},
			{x: 12, y: 6, tileset: 'testtile.svg'},
			{x: 13, y: 6, tileset: 'testtile.svg'},
			{x: 14, y: 6, tileset: 'testtile.svg'},
			{x: 15, y: 6, tileset: 'testtile.svg'},
			{x: 16, y: 6, tileset: 'testtile.svg'},
			{x: 17, y: 6, tileset: 'testtile.svg'},
			{x: 18, y: 6, tileset: 'testtile.svg'},
			{x: 19, y: 6, tileset: 'testtile.svg'},
			{x: 0, y: 6, tileset: 'testtile.svg'},

			{x: 1, y: 7, tileset: 'testtile.svg'},
			{x: 2, y: 7, tileset: 'testtile.svg'},
			{x: 3, y: 7, tileset: 'testtile.svg'},
			{x: 4, y: 7, tileset: 'testtile.svg'},
			{x: 5, y: 7, tileset: 'testtile.svg'},
			{x: 6, y: 7, tileset: 'testtile.svg'},
			{x: 7, y: 7, tileset: 'testtile.svg'},
			{x: 8, y: 7, tileset: 'testtile.svg'},
			{x: 9, y: 7, tileset: 'testtile.svg'},
			{x: 10, y: 7, tileset: 'testtile.svg'},
			{x: 11, y: 7, tileset: 'testtile.svg'},
			{x: 12, y: 7, tileset: 'testtile.svg'},
			{x: 13, y: 7, tileset: 'testtile.svg'},
			{x: 14, y: 7, tileset: 'testtile.svg'},
			{x: 15, y: 7, tileset: 'testtile.svg'},
			{x: 16, y: 7, tileset: 'testtile.svg'},
			{x: 17, y: 7, tileset: 'testtile.svg'},
			{x: 18, y: 7, tileset: 'testtile.svg'},
			{x: 19, y: 7, tileset: 'testtile.svg'},
			{x: 0, y: 7, tileset: 'testtile.svg'},

			{x: 1, y: 8, tileset: 'testtile.svg'},
			{x: 2, y: 8, tileset: 'testtile.svg'},
			{x: 3, y: 8, tileset: 'testtile.svg'},
			{x: 4, y: 8, tileset: 'testtile.svg'},
			{x: 5, y: 8, tileset: 'testtile.svg'},
			{x: 6, y: 8, tileset: 'testtile.svg'},
			{x: 7, y: 8, tileset: 'testtile.svg'},
			{x: 8, y: 8, tileset: 'testtile.svg'},
			{x: 9, y: 8, tileset: 'testtile.svg'},
			{x: 10, y: 8, tileset: 'testtile.svg'},
			{x: 11, y: 8, tileset: 'testtile.svg'},
			{x: 12, y: 8, tileset: 'testtile.svg'},
			{x: 13, y: 8, tileset: 'testtile.svg'},
			{x: 14, y: 8, tileset: 'testtile.svg'},
			{x: 15, y: 8, tileset: 'testtile.svg'},
			{x: 16, y: 8, tileset: 'testtile.svg'},
			{x: 17, y: 8, tileset: 'testtile.svg'},
			{x: 18, y: 8, tileset: 'testtile.svg'},
			{x: 19, y: 8, tileset: 'testtile.svg'},
			{x: 0, y: 8, tileset: 'testtile.svg'},

			{x: 1, y: 9, tileset: 'testtile.svg'},
			{x: 2, y: 9, tileset: 'testtile.svg'},
			{x: 3, y: 9, tileset: 'testtile.svg'},
			{x: 4, y: 9, tileset: 'testtile.svg'},
			{x: 5, y: 9, tileset: 'testtile.svg'},
			{x: 6, y: 9, tileset: 'testtile.svg'},
			{x: 7, y: 9, tileset: 'testtile.svg'},
			{x: 8, y: 9, tileset: 'testtile.svg'},
			{x: 9, y: 9, tileset: 'testtile.svg'},
			{x: 10, y: 9, tileset: 'testtile.svg'},
			{x: 11, y: 9, tileset: 'testtile.svg'},
			{x: 12, y: 9, tileset: 'testtile.svg'},
			{x: 13, y: 9, tileset: 'testtile.svg'},
			{x: 14, y: 9, tileset: 'testtile.svg'},
			{x: 15, y: 9, tileset: 'testtile.svg'},
			{x: 16, y: 9, tileset: 'testtile.svg'},
			{x: 17, y: 9, tileset: 'testtile.svg'},
			{x: 18, y: 9, tileset: 'testtile.svg'},
			{x: 19, y: 9, tileset: 'testtile.svg'},
			{x: 0, y: 9, tileset: 'testtile.svg'},

			{x: 1, y: 10, tileset: 'testtile.svg'},
			{x: 2, y: 10, tileset: 'testtile.svg'},
			{x: 3, y: 10, tileset: 'testtile.svg'},
			{x: 4, y: 10, tileset: 'testtile.svg'},
			{x: 5, y: 10, tileset: 'testtile.svg'},
			{x: 6, y: 10, tileset: 'testtile.svg'},
			{x: 7, y: 10, tileset: 'testtile.svg'},
			{x: 8, y: 10, tileset: 'testtile.svg'},
			{x: 9, y: 10, tileset: 'testtile.svg'},
			{x: 10, y: 10, tileset: 'testtile.svg'},
			{x: 11, y: 10, tileset: 'testtile.svg'},
			{x: 12, y: 10, tileset: 'testtile.svg'},
			{x: 13, y: 10, tileset: 'testtile.svg'},
			{x: 14, y: 10, tileset: 'testtile.svg'},
			{x: 15, y: 10, tileset: 'testtile.svg'},
			{x: 16, y: 10, tileset: 'testtile.svg'},
			{x: 17, y: 10, tileset: 'testtile.svg'},
			{x: 18, y: 10, tileset: 'testtile.svg'},
			{x: 19, y: 10, tileset: 'testtile.svg'},
			{x: 0, y: 10, tileset: 'testtile.svg'},

			{x: 1, y: 11, tileset: 'testtile.svg'},
			{x: 2, y: 11, tileset: 'testtile.svg'},
			{x: 3, y: 11, tileset: 'testtile.svg'},
			{x: 4, y: 11, tileset: 'testtile.svg'},
			{x: 5, y: 11, tileset: 'testtile.svg'},
			{x: 6, y: 11, tileset: 'testtile.svg'},
			{x: 7, y: 11, tileset: 'testtile.svg'},
			{x: 8, y: 11, tileset: 'testtile.svg'},
			{x: 9, y: 11, tileset: 'testtile.svg'},
			{x: 10, y: 11, tileset: 'testtile.svg'},
			{x: 11, y: 11, tileset: 'testtile.svg'},
			{x: 12, y: 11, tileset: 'testtile.svg'},
			{x: 13, y: 11, tileset: 'testtile.svg'},
			{x: 14, y: 11, tileset: 'testtile.svg'},
			{x: 15, y: 11, tileset: 'testtile.svg'},
			{x: 16, y: 11, tileset: 'testtile.svg'},
			{x: 17, y: 11, tileset: 'testtile.svg'},
			{x: 18, y: 11, tileset: 'testtile.svg'},
			{x: 19, y: 11, tileset: 'testtile.svg'},
			{x: 0, y: 11, tileset: 'testtile.svg'},

			{x: 1, y: 12, tileset: 'testtile.svg'},
			{x: 2, y: 12, tileset: 'testtile.svg'},
			{x: 3, y: 12, tileset: 'testtile.svg'},
			{x: 4, y: 12, tileset: 'testtile.svg'},
			{x: 5, y: 12, tileset: 'testtile.svg'},
			{x: 6, y: 12, tileset: 'testtile.svg'},
			{x: 7, y: 12, tileset: 'testtile.svg'},
			{x: 8, y: 12, tileset: 'testtile.svg'},
			{x: 9, y: 12, tileset: 'testtile.svg'},
			{x: 10, y: 12, tileset: 'testtile.svg'},
			{x: 11, y: 12, tileset: 'testtile.svg'},
			{x: 12, y: 12, tileset: 'testtile.svg'},
			{x: 13, y: 12, tileset: 'testtile.svg'},
			{x: 14, y: 12, tileset: 'testtile.svg'},
			{x: 15, y: 12, tileset: 'testtile.svg'},
			{x: 16, y: 12, tileset: 'testtile.svg'},
			{x: 17, y: 12, tileset: 'testtile.svg'},
			{x: 18, y: 12, tileset: 'testtile.svg'},
			{x: 19, y: 12, tileset: 'testtile.svg'},
			{x: 0, y: 12, tileset: 'testtile.svg'},

			{x: 1, y: 13, tileset: 'testtile.svg'},
			{x: 2, y: 13, tileset: 'testtile.svg'},
			{x: 3, y: 13, tileset: 'testtile.svg'},
			{x: 4, y: 13, tileset: 'testtile.svg'},
			{x: 5, y: 13, tileset: 'testtile.svg'},
			{x: 6, y: 13, tileset: 'testtile.svg'},
			{x: 7, y: 13, tileset: 'testtile.svg'},
			{x: 8, y: 13, tileset: 'testtile.svg'},
			{x: 9, y: 13, tileset: 'testtile.svg'},
			{x: 10, y: 13, tileset: 'testtile.svg'},
			{x: 11, y: 13, tileset: 'testtile.svg'},
			{x: 12, y: 13, tileset: 'testtile.svg'},
			{x: 13, y: 13, tileset: 'testtile.svg'},
			{x: 14, y: 13, tileset: 'testtile.svg'},
			{x: 15, y: 13, tileset: 'testtile.svg'},
			{x: 16, y: 13, tileset: 'testtile.svg'},
			{x: 17, y: 13, tileset: 'testtile.svg'},
			{x: 18, y: 13, tileset: 'testtile.svg'},
			{x: 19, y: 13, tileset: 'testtile.svg'},
			{x: 0, y: 13, tileset: 'testtile.svg'},

			{x: 1, y: 14, tileset: 'testtile.svg'},
			{x: 2, y: 14, tileset: 'testtile.svg'},
			{x: 3, y: 14, tileset: 'testtile.svg'},
			{x: 4, y: 14, tileset: 'testtile.svg'},
			{x: 5, y: 14, tileset: 'testtile.svg'},
			{x: 6, y: 14, tileset: 'testtile.svg'},
			{x: 7, y: 14, tileset: 'testtile.svg'},
			{x: 8, y: 14, tileset: 'testtile.svg'},
			{x: 9, y: 14, tileset: 'testtile.svg'},
			{x: 10, y: 14, tileset: 'testtile.svg'},
			{x: 11, y: 14, tileset: 'testtile.svg'},
			{x: 12, y: 14, tileset: 'testtile.svg'},
			{x: 13, y: 14, tileset: 'testtile.svg'},
			{x: 14, y: 14, tileset: 'testtile.svg'},
			{x: 15, y: 14, tileset: 'testtile.svg'},
			{x: 16, y: 14, tileset: 'testtile.svg'},
			{x: 17, y: 14, tileset: 'testtile.svg'},
			{x: 18, y: 14, tileset: 'testtile.svg'},
			{x: 19, y: 14, tileset: 'testtile.svg'},
			{x: 0, y: 14, tileset: 'testtile.svg'},

			{x: 1, y: 15, tileset: 'testtile.svg'},
			{x: 2, y: 15, tileset: 'testtile.svg'},
			{x: 3, y: 15, tileset: 'testtile.svg'},
			{x: 4, y: 15, tileset: 'testtile.svg'},
			{x: 5, y: 15, tileset: 'testtile.svg'},
			{x: 6, y: 15, tileset: 'testtile.svg'},
			{x: 7, y: 15, tileset: 'testtile.svg'},
			{x: 8, y: 15, tileset: 'testtile.svg'},
			{x: 9, y: 15, tileset: 'testtile.svg'},
			{x: 10, y: 15, tileset: 'testtile.svg'},
			{x: 11, y: 15, tileset: 'testtile.svg'},
			{x: 12, y: 15, tileset: 'testtile.svg'},
			{x: 13, y: 15, tileset: 'testtile.svg'},
			{x: 14, y: 15, tileset: 'testtile.svg'},
			{x: 15, y: 15, tileset: 'testtile.svg'},
			{x: 16, y: 15, tileset: 'testtile.svg'},
			{x: 17, y: 15, tileset: 'testtile.svg'},
			{x: 18, y: 15, tileset: 'testtile.svg'},
			{x: 19, y: 15, tileset: 'testtile.svg'},
			{x: 0, y: 15, tileset: 'testtile.svg'},

			{x: 1, y: 16, tileset: 'testtile.svg'},
			{x: 2, y: 16, tileset: 'testtile.svg'},
			{x: 3, y: 16, tileset: 'testtile.svg'},
			{x: 4, y: 16, tileset: 'testtile.svg'},
			{x: 5, y: 16, tileset: 'testtile.svg'},
			{x: 6, y: 16, tileset: 'testtile.svg'},
			{x: 7, y: 16, tileset: 'testtile.svg'},
			{x: 8, y: 16, tileset: 'testtile.svg'},
			{x: 9, y: 16, tileset: 'testtile.svg'},
			{x: 10, y: 16, tileset: 'testtile.svg'},
			{x: 11, y: 16, tileset: 'testtile.svg'},
			{x: 12, y: 16, tileset: 'testtile.svg'},
			{x: 13, y: 16, tileset: 'testtile.svg'},
			{x: 14, y: 16, tileset: 'testtile.svg'},
			{x: 15, y: 16, tileset: 'testtile.svg'},
			{x: 16, y: 16, tileset: 'testtile.svg'},
			{x: 17, y: 16, tileset: 'testtile.svg'},
			{x: 18, y: 16, tileset: 'testtile.svg'},
			{x: 19, y: 16, tileset: 'testtile.svg'},
			{x: 0, y: 16, tileset: 'testtile.svg'},

			{x: 1, y: 17, tileset: 'testtile.svg'},
			{x: 2, y: 17, tileset: 'testtile.svg'},
			{x: 3, y: 17, tileset: 'testtile.svg'},
			{x: 4, y: 17, tileset: 'testtile.svg'},
			{x: 5, y: 17, tileset: 'testtile.svg'},
			{x: 6, y: 17, tileset: 'testtile.svg'},
			{x: 7, y: 17, tileset: 'testtile.svg'},
			{x: 8, y: 17, tileset: 'testtile.svg'},
			{x: 9, y: 17, tileset: 'testtile.svg'},
			{x: 10, y: 17, tileset: 'testtile.svg'},
			{x: 11, y: 17, tileset: 'testtile.svg'},
			{x: 12, y: 17, tileset: 'testtile.svg'},
			{x: 13, y: 17, tileset: 'testtile.svg'},
			{x: 14, y: 17, tileset: 'testtile.svg'},
			{x: 15, y: 17, tileset: 'testtile.svg'},
			{x: 16, y: 17, tileset: 'testtile.svg'},
			{x: 17, y: 17, tileset: 'testtile.svg'},
			{x: 18, y: 17, tileset: 'testtile.svg'},
			{x: 19, y: 17, tileset: 'testtile.svg'},
			{x: 0, y: 17, tileset: 'testtile.svg'},

			{x: 1, y: 18, tileset: 'testtile.svg'},
			{x: 2, y: 18, tileset: 'testtile.svg'},
			{x: 3, y: 18, tileset: 'testtile.svg'},
			{x: 4, y: 18, tileset: 'testtile.svg'},
			{x: 5, y: 18, tileset: 'testtile.svg'},
			{x: 6, y: 18, tileset: 'testtile.svg'},
			{x: 7, y: 18, tileset: 'testtile.svg'},
			{x: 8, y: 18, tileset: 'testtile.svg'},
			{x: 9, y: 18, tileset: 'testtile.svg'},
			{x: 10, y: 18, tileset: 'testtile.svg'},
			{x: 11, y: 18, tileset: 'testtile.svg'},
			{x: 12, y: 18, tileset: 'testtile.svg'},
			{x: 13, y: 18, tileset: 'testtile.svg'},
			{x: 14, y: 18, tileset: 'testtile.svg'},
			{x: 15, y: 18, tileset: 'testtile.svg'},
			{x: 16, y: 18, tileset: 'testtile.svg'},
			{x: 17, y: 18, tileset: 'testtile.svg'},
			{x: 18, y: 18, tileset: 'testtile.svg'},
			{x: 19, y: 18, tileset: 'testtile.svg'},
			{x: 0, y: 18, tileset: 'testtile.svg'},

			{x: 1, y: 19, tileset: 'testtile.svg'},
			{x: 2, y: 19, tileset: 'testtile.svg'},
			{x: 3, y: 19, tileset: 'testtile.svg'},
			{x: 4, y: 19, tileset: 'testtile.svg'},
			{x: 5, y: 19, tileset: 'testtile.svg'},
			{x: 6, y: 19, tileset: 'testtile.svg'},
			{x: 7, y: 19, tileset: 'testtile.svg'},
			{x: 8, y: 19, tileset: 'testtile.svg'},
			{x: 9, y: 19, tileset: 'testtile.svg'},
			{x: 10, y: 19, tileset: 'testtile.svg'},
			{x: 11, y: 19, tileset: 'testtile.svg'},
			{x: 12, y: 19, tileset: 'testtile.svg'},
			{x: 13, y: 19, tileset: 'testtile.svg'},
			{x: 14, y: 19, tileset: 'testtile.svg'},
			{x: 15, y: 19, tileset: 'testtile.svg'},
			{x: 16, y: 19, tileset: 'testtile.svg'},
			{x: 17, y: 19, tileset: 'testtile.svg'},
			{x: 18, y: 19, tileset: 'testtile.svg'},
			{x: 19, y: 19, tileset: 'testtile.svg'},
			{x: 0, y: 19, tileset: 'testtile.svg'},
		],
		objects: [
			{x: 2, y: 1, object: 'talltestobject'},
			{x: 2, y: 2, object: 'talltestobject'},
			{x: 15, y: 10, object: 'shorttestobject'},
			{x: 15, y: 11, object: 'shorttestobject'},
			{x: 15, y: 12, object: 'shorttestobject'},
			{x: 10, y: 5, object: 'shorttesttable'},
		]
	}
};

const map = (el) => {
	const clearMap = function () {
		while (el.hasChildNodes()) {
		    el.removeChild(el.lastChild);
		}
	};

	const addFloor = function (map) {
		var wrap = document.createElement('rpg-floor'),
			tile,
			i;

		for (var i = map.floor.length - 1; i >= 0; i--) {
			tile = document.createElement('rpg-floor-tile');
			tile.style.left = (map.floor[i].x + 1) - (map.floor[i].y + 1) + 'em';
			tile.style.top = ((map.floor[i].x + 1) *.5) + ((map.floor[i].y + 1) * .5) + 'em';
			tile.dataset.x = map.floor[i].x;
			tile.dataset.y = map.floor[i].y;

			tile.style.backgroundImage = 'url("img/' + map.floor[i].tileset + '")';

			wrap.appendChild(tile);
		}

		el.appendChild(wrap);
	};

	const addObjects = function (map) {
		for (var i = map.objects.length - 1; i >= 0; i--) {
			var obj = document.createElement('rpg-object');
			// obj.style.left = map.objects[i].x + 'em';
			// obj.style.top = map.objects[i].y + 'em';
			// obj.style.width = map.objects[i].width + 'em';
			// obj.style.height = map.objects[i].height + 'em';
			obj.dataset.x = map.objects[i].x;
			obj.dataset.y = map.objects[i].y;

			obj.style.left = (map.objects[i].x + 1) - (map.objects[i].y + 1) + 'em';
			obj.style.top = ((map.objects[i].x + 1) *.5) + ((map.objects[i].y + 1) * .5) + 'em';

			obj.style.width = (objects[map.objects[i].object].width * 2) + 'em';
			obj.style.height = objects[map.objects[i].object].height + 'em';
			obj.style.marginTop = (objects[map.objects[i].object].height * -1) + .5 + 'em';
			obj.style.zIndex = map.objects[i].x + map.objects[i].y;

			obj.style.backgroundImage = 'url("img/' + objects[map.objects[i].object].tileset + '")';

			el.appendChild(obj);
		}
	};

	return {
		map: null,
		change: function (name) {
			this.map = maps[name];
			el.style.width = (maps[name].width * 2) + 'em';
			el.style.height = maps[name].height + 'em';
			el.style.marginLeft = 0;
			el.style.marginTop = 0;
			clearMap();
			addFloor(this.map);
			addObjects(this.map);
		},
		setCenter: function (x, y) {
			el.style.marginLeft = (x - y) * -1 + 'em';
			el.style.marginTop = ((x *.5) + (y * .5)) * -1 + 'em';

			document.getElementById('player').style.zIndex = x + y;
			document.getElementById('playerPos').innerHTML = x + ',' + y;
		},
		/*
			Check if the player can move to a certain space by checking:
				- There is a tile in that space
				- There is not an object tile
		*/
		collision: function (x, y) {
			var collides = false,
				i,
				xCollision,
				yCollision;
			for (i = this.map.objects.length - 1; i >= 0; i--) {
				xCollision = x == this.map.objects[i].x;
				yCollision = y == this.map.objects[i].y;

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
  	state.el.style.left = (x * 2) + 'em';
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
	x: 3,
	y: 3,
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