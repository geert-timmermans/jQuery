let computerChoice = function() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return  'rock';
    } else if(random === 1) {
      return 'paper';
    } else {
      return 'scissors';
    } 
};

let compare = function(me, opponent) {
    if(me === 'rock') {
      
        if(opponent === 'rock') {
            return 'Tie';
        } else if (opponent === 'paper') {
          return 'Paper beats rock :(';
        } else if (opponent === 'scissors') {
          return 'Rock beats scissors! >:)';
        }
      
    } else if (me === 'paper') {
      
        if(opponent === 'paper') {
          return 'Tie';
        } else if (opponent === 'rock') {
          return 'Paper beats rock :)';
        } else if (opponent === 'scissors') {
          return 'Scissors beats paper! >:)';
      }
    } else if (me === 'scissors') {
      
        if(opponent === 'scissors') {
          return 'Tie';
        } else if (opponent === 'paper') {
          return 'Scissors   beats paper :(';
        } else if (opponent === 'rock') {
          return 'Rock beats Scissors! >:)';
      }
    } else {
      return `That doesn't make any sense!`
    }
  };

$('#scissors').on('click', function(){
    let result = compare('scissors', computerChoice());
    $('#result').html(result);
  });
  
  $('#rock').on('click', function(){
    let result = compare('rock', computerChoice());
    $('#result').html(result);
  });
  
  $('#paper').on('click', function(){
    let result = compare('paper', computerChoice());
    $('#result').html(result);
  });