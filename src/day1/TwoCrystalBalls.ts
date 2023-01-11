export default function two_crystal_balls(breaks: boolean[]): number {

  const jump = Math.floor(Math.sqrt(breaks.length))
  let i = jump
  for (; i < breaks.length; i+=jump) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jump;
  for (; i<breaks.length; i++) {
    if (breaks[i]) return i;
  }
  return -1;
  
}

// function two_crystal_balls(breaks) {
//
//   // get length 
//   const n = breaks.length
//   // get log
//   const log = Math.floor(Math.log(n))
//   let i = 0;
//   while (breaks[i] === false) {
//     i+=log;
//   } 
//   i-=log;
//   while (breaks[i] === false) {
//     i++;
//   }
//   return i;
// }
//
//
// const arr = [false, false, false, false, true, true, true, true, true, true, true, true]
//
// console.log(two_crystal_balls(arr))
