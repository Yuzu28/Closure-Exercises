

// Count Part 1

function counter(){
    var count = 0;
    var counting = function (){
      count++;
      return count;
    }
    return counting;
  }
  
  
  var count1 = counter();
  var count2 = counter();
  console.log(count1());
  console.log(count1());
  
  console.log(count2()); 
  console.log(count2()); 
  console.log(count1());






  //Count Part 2

  function counter(num){
    var count = num;
    var counting = function (){
      count++;
      return count;
    }
    return counting;
  }
  
  
  var count1 = counter(4)
  console.log(count1());
  console.log(count1());






//Counter Part 3


function counter(num){
    var count = num;
    var counting = function (x){
      count+=x;
    }
    return {
    increment: function() {
      count+=1;
      return count;
    },
    decrement: function() {
      count-=1;
       return count;
    }
  }
}

  
var count = counter(4);
console.log(count.increment() );
console.log(count.increment());
console.log( count.decrement());
console.log(count.decrement());