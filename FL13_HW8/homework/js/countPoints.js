function countPoints(arr) {
   return arr.reduce((acc, item) => {
       if (item[0] > item[2]) {
           acc += 3;
       } else if (item[0] === item[2]) {
           acc += 1;
       }
       return acc;
   },0);
}

countPoints([]);
