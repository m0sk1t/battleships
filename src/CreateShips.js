const CreateShips = (shipsSizeArr) => {
  let ships = [],
    map = new Array(10);

  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(10);
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < 10; j++) {
      map[i][j] = -1;
    }
  }

  createShip:
    for (let i = 0; i < shipsSizeArr.length; i++) {
      let currSize = shipsSizeArr[i],
        ship = {
          'size': currSize,
          'classId': i,
          'layout': []
        }
      let anchorPoint = CreateAnchorPoint(ship.size),
        y = anchorPoint[0],
        x = anchorPoint[1],
        directionChanged = false;

      if (map[y][x] != -1) {
        i--;
        continue createShip;
      }

      let direction = RandDirection(),
        tempLayout = [];

      if (direction === 'x') {
        let currX = x;

        for (let j = 1; j < ship.size; j++) {
          currX++;

          if (map[y][currX] != -1) {
            if (!directionChanged) {
              i--;
              continue createShip;
            }
            
            i--;
            continue createShip;
          }

          tempLayout.push([y, currX]);
        }
      } else {
        let currY = y;

        for (let j = 1; j < ship.size; j++) {
          currY++;

          if (map[currY][x] != -1) {
            if (!directionChanged) {
              i--;
              continue createShip;
            }

            i--;
            continue createShip;
          }

          tempLayout.push([currY, x]);
        }
      }

      ship.layout = [anchorPoint, ...tempLayout];
      ship.direction = direction;
      ships.push(ship);
      let updatedMap = updMap(map, ship);
      map = updatedMap;
    }
  return ships;
}

function CreateAnchorPoint(shipSize) {
  return [RandomInteger(0, 10 - shipSize), RandomInteger(0, 10 - shipSize)]
}

function RandomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

function RandDirection() {
  return (Math.random() - 0.5) > 0 ? 'x' : 'y';
}

function updMap(map, ship) {
  ship.layout.forEach(part => {
    let y = part[0],
      x = part[1],
      doSomth = 0;

    map[y][x] = ship.size;

    map[y - 1] != null ? map[y - 1][x - 1] != null ? map[y - 1][x - 1] = 0 : 0 : 0;
    map[y - 1] != null ? map[y - 1][x    ] != null ? map[y - 1][x    ] = 0 : 0 : 0;
    map[y - 1] != null ? map[y - 1][x + 1] != null ? map[y - 1][x + 1] = 0 : 0 : 0;
    map[y    ] != null ? map[y    ][x - 1] != null ? map[y    ][x - 1] = 0 : 0 : 0;
    map[y    ] != null ? map[y    ][x + 1] != null ? map[y    ][x + 1] = 0 : 0 : 0;
    map[y + 1] != null ? map[y + 1][x - 1] != null ? map[y + 1][x - 1] = 0 : 0 : 0;
    map[y + 1] != null ? map[y + 1][x    ] != null ? map[y + 1][x    ] = 0 : 0 : 0;
    map[y + 1] != null ? map[y + 1][x + 1] != null ? map[y + 1][x + 1] = 0 : 0 : 0;

  })

  return map;
}

export default CreateShips;