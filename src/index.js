`use strict`;

/**
 * Write a function to calculate the winner's rating after meeting an opponent.
    The rules for calculating the rating are:
    1. When defeating a weaker or equally rated player:
        1.1 Your and your opponent's rating difference >= 0 and <= 2 units -- you get +2 to the rating.
        1.2 Your and your opponent's rating difference > 2 and < 20 units - you get +1 to your rating.
        1.3 The difference between your and your opponent's ratings >= 20 units -- get 0 to your rating;
    2. When defeating a player with a stronger rating, the addition to the rating is calculated according to the formula:
        (R.rival - R.yours + 5)/3;
    3. If the winner's rating is 0, the rating will be equal to the rating of the loser.
    For simplification, we assume that the first argument is the rating of the winner of the pair.
    The rating of the players cannot be less than 0.
    It is necessary to prevent any incorrect input.
    The function must return the numeric value of the new rating of the winner,
    rounded to 1 decimal place.
    JS Doc should be added
 * @param {Number} winRate - winner rating before the meeting
 * @param {Numder} loseRate - loser rating before the meeting
 * @returns new winner after the meeting
 */

function rate (winRate, loseRate){
  const diffinRate = winRate - loseRate;
  if (
    Number.isNaN(diffinRate) ||
    Number.isNaN(winRate) ||
    Number.isNaN(loseRate) ||
    winRate < 0 || loseRate < 0
    ) {
    return 'Entered wrong information';
  }
  if (winRate === 0){
    return (winRate = loseRate)
  }
  if (diffinRate < 0){
    const newWinRate = (winRate + (loseRate - winRate + 5)) / 3;
    return newWinRate;
  }
  if (winRate >= loseRate){
    if (diffinRate >= 0 && diffinRate <=2){
      return (winRate += 2);
    }else if (diffinRate > 2 && diffinRate <20){
      return (winRate += 1);
    }else (diffinRate >= 20);
      return (winRate);
    }
  }
console.log(rate());
