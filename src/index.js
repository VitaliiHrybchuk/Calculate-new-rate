`use strict`;

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
