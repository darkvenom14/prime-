let num = 13 ;
let count=0;
for( i=0 ; i<=num ; i++ ){
  if( num % i ==0 ){
    count++
  }
} 
( count == 2 )? console.log("yes"):
  console.log("no")