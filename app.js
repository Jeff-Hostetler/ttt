var click_count = 0;

var winners = [
                ["one", "two", "three"], ["four", "five", "six"], ["seven", "eight", "nine"],
                ["one", "four", "seven"], ["two", "five", "eight"], ["three", "six", "nine"],
                ["one", "five", "nine"], ["three", "five", "seven"]
              ]

var x_array =[];
var o_array = [];

function diff(arr1, arr2) {
    var ret = [];
    for(i in arr1) {
        if(arr2.indexOf( arr1[i] ) > -1){
            ret.push( arr1[i] );
        }
    }
    return ret;
};

$( ".waiting" ).click(function() {
  if ($(this).hasClass("waiting")) {
    if (click_count % 2 ==0) {
      $(this).append( "<p>O</p>" );
      click_count +=1;
      $(this).removeClass("waiting");
      o_array.push(this.id);
      winners.forEach(function(entry){
        if (diff(entry, o_array).length == 3){;
          console.log("Winner");
          $(".waiting").removeClass("waiting");
          entry.forEach(function(id){
            $('#'+id).addClass("winner");
          })
          $('.cell').each(function(){
            if ($(this).hasClass("winner") != true) {
              $(this).addClass("loser")
            }
          })
        }
      })
    } else {
      $(this).append( "<p>X</p>" );
      click_count +=1;
      $(this).removeClass("waiting");
      x_array.push(this.id);
      winners.forEach(function(entry){
        if (diff(entry, x_array).length == 3){
          console.log("Winner");
          $(".waiting").removeClass("waiting");
          entry.forEach(function(id){
            $('#'+id).addClass("winner");
          })
          $('.cell').each(function(){
            if ($(this).hasClass("winner") != true) {
              $(this).addClass("loser")
            }
          })
        };
      })
    }
  }
});
