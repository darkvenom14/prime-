let num = 13 ;
let count=0;
for( i=1 ; i<=num ; i++ ){
  if( num % i ==1 ){
    count++
  }
} 
( count == 0 )? console.log("yes"):
  console.log("no")