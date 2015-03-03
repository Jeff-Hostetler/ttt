var click_count = 0;

var winners = [
                ["one", "two", "three"], ["four", "five", "six"], ["seven", "eight", "nine"],
                ["one", "four", "seven"], ["two", "five", "eight"], ["three", "six", "nine"],
                ["one", "five", "nine"], ["three", "five", "seven"]
              ]

var available_cells = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
var x_array =[];
var o_array = [];
var winnerCheck = false;


function diff(arr1, arr2) {
    var ret = [];
    for(i in arr1) {
        if(arr2.indexOf( arr1[i] ) > -1){
            ret.push( arr1[i] );
        }
    }
    return ret;
};

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
};

function checkWinner(arr1, arr2){
  arr1.forEach(function(entry){
    if (diff(entry, arr2).length == 3){
      winnerCheck = true;
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
}

function runComputer(){
  var computer_choice = available_cells[Math.floor(Math.random()*available_cells.length)];
  console.log(computer_choice)
  $('#' + computer_choice).append("<p>X</p>")
  click_count +=1;
  $('#' + computer_choice).removeClass("waiting");
  x_array.push(computer_choice);
  removeA(available_cells, computer_choice)
  checkWinner(winners, x_array)
}

$( ".waiting" ).click(function() {
  if ($(this).hasClass("waiting")) {
    if (click_count % 2 ==0) {
      $(this).append( "<p>O</p>" );
      click_count +=1;
      $(this).removeClass("waiting").delay( 800 );
      o_array.push(this.id);
      removeA(available_cells, this.id)
      checkWinner(winners, o_array)
      if (winnerCheck==false) {
        window.setTimeout(runComputer,500)
      }


    }
  }
});
