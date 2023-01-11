// // PRIME'S SOLUTION
// // maze is like a matrix
// // access by calling array[y][x]
// // because [[x,x,x,x,x,x,x],[x,x,x,x,x,x,x,x], [x,x,x,x,x,x,x,x]]
//
// const dir = [
//   [-1,0],
//   [1,0],
//   [0,-1],
//   [0,1]
// ]
//
// function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
//   
//   // THIS WALK FUNC IS THE BASE CASE
//
//
//   // off the map -- if less than 0 or more then the length of y
//   if (curr.x < 0 || curr.x >= maze[0].length || 
//   curr.y < 0 || curr.y >= maze.length) {
//     return false;
//   }
//   // on wall
//   if (maze[curr.y][curr.x] === wall) {
//     return false;
//   }
//
//   // at end
//   if (curr.x === end.x && curr.y === end.y) {
//     path.push(end);
//     return true;
//   }
//
//   // already seen point
//   if (seen[curr.y][curr.x]) {
//     return false;
//   }
//
//   // recurse
//   // 1- pre ---- we add current point to the path
//   seen[curr.y][curr.x] = true;
//   path.push(curr);
//   // 2- recurse
//   // dir array hardcodes all the directional options
//   for (let i=0; i<dir.length; ++i) {
//     const [x,y] = dir[i];
//     if (
//       walk(maze, wall, {
//         x: curr.x + x,
//         y: curr.y + y,
//       }, end, seen, path)) {
//       return true;
//     }
//   }
//   // 3- post
//   path.pop();
//
//   return false;
// }
//
// export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
//
//   const seen: boolean[][]= [];
//   const path: Point[] = [];
//
//   for (let i = 0; i<maze.length; ++i) {
//     seen.push(new Array(maze[0].length).fill(false));
//   }
//
//   walk(maze, wall, start, end, seen, path)
//
//   return path;
//
// }
//
//

// OWN SOLUTION
// // maze is like a matrix
// // access by calling array[y][x]
// // because [[x,x,x,x,x,x,x],[x,x,x,x,x,x,x,x], [x,x,x,x,x,x,x,x]]

// util arrays
// walk director
// walk path
//
// direction -- [x,y] -- up, right, down, left
const direction = [
  [0,-1],
  [1,0],
  [0,1],
  [-1,0]
]

type Point = {
  x: number,
  y: number
}

function walk(maze: string[], wall: string, curr: Point, end: Point, path: Point[], seen: boolean[][]) {

  // set up base case

  // THIS WALK FUNC IS THE BASE CASE
  // It checks what is the current point, returns false for invalid lines
  // returns true once you reach end point


  // off the map -- if less than 0 or more then the length of y
  if (curr.x < 0 || curr.x >= maze[0].length || 
    curr.y < 0 || curr.y >= maze.length) {
    return false;
  }

  // if move is wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  
  // if is end, 
  // note that at this point current point is not updated into the path yet
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // if point is already seen
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // PRE-RECURSION
  // update seen
  seen[curr.y][curr.x] = true
  // update path -- we remove if path turns out to be a dud
  path.push(curr)

  // RECURSION
  // thoughts on returning true..
  // so we return true when the path is clear or if it is the end.. we only continue the recursion if it is true.. if at any branch there is a false, the whole tree path is negated and not even considered..
  for (let i=0; i<direction.length; i++) {
    const [moveX, moveY] = direction[i];
    const go = {x: curr.x + moveX, y: curr.y + moveY};
    const isEnd = walk(maze, wall, go, end, path, seen);
    if (isEnd) return true;
  }

  // POST-RECURSION
  // * we remove the point in the path we added at pre because it didn't return true
  path.pop();

  // reaching this part of the function represents a dud path - return false
  return false;

}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  //generate path array
  const path: Point[] = []

  //generate a seen array and fill with false
  const seen: boolean[][] = []
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, path, seen)

  return path;
}

