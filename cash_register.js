function checkCashRegister(price, cash, cid){
  let difference = Math.round(parseFloat(cash-price)*100)/100;
  let originalDiff = difference;
  let denomination = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let changeArr = [["PENNY", 0.00], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  for(let i = denomination.length - 1; i > -1; i--){
  	while (denomination[i] <= difference && cid[i][1] > 0){
  		difference = Math.round(parseFloat(difference - denomination[i])*100)/100;
  		changeArr[i][1] = Math.round(parseFloat(changeArr[i][1] + denomination[i])*100)/100;
      cid[i][1] = Math.round(parseFloat(cid[i][1] - denomination[i])*100)/100;
      //console.log(change[i][0])
  	}
  }
  //console.log(changeArr)
  return statusAndChange(cid, originalDiff, changeArr);
}
function statusAndChange(cashArr, diff, arr){
  let statusAndChange = {status: '', change: []};
  let availableFunds = 0;
  let drawnFunds = 0;
  for(let i = 0; i < cashArr.length; i++){
    availableFunds = Math.round(parseFloat(availableFunds + cashArr[i][1])*100)/100;
    drawnFunds = Math.round(parseFloat(drawnFunds + arr[i][1])*100)/100;;
  }
  availableFunds = Math.round(parseFloat(availableFunds)*100)/100;
  if(drawnFunds < diff){
    statusAndChange.status = "INSUFFICIENT_FUNDS";
  }
  if(availableFunds > 0 && drawnFunds === diff){
    statusAndChange.status = "OPEN";
     for(let i = arr.length - 1; i > -1; i--){
        if(arr[i][1] > 0){
          statusAndChange.change.push(arr[i]);
        }
      }
  }
  if(availableFunds === 0 && drawnFunds === diff){
    statusAndChange.status = "CLOSED";
    statusAndChange.change = arr;
  }
  console.log(statusAndChange)
  return statusAndChange;
}
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.1], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
