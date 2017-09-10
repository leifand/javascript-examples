function maxStockProfit(arr){
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;
    var len = arr.length;
    var changeBuyPrice = true;


    for(var i = 0; i < len; i++){
        if(changeBuyPrice){
            buyPrice = arr[i];
        }
        sellPrice = arr[i + 1];

        if(sellPrice < buyPrice){
            changeBuyPrice = true;
        }
        else{
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit){
                maxProfit = tempProfit;
            }
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
