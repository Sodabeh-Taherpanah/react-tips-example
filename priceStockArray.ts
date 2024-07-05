//You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

//On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

//Find and return the maximum profit you can achieve.

var maxProfit = function(prices) {
    var tem=prices;
    let buyDay=0;
    let hasProfit=false;
    let profits=0
    for(let i=0;i<tem.length;i++)
    {
         if(tem[i]>=tem[i+1])
         {   
            // tem=tem.slice(1)
         
             if(buyDay>-1)
             {
                 
                 if(tem[i]>tem[buyDay] && hasProfit)
                 {
                     console.log( "1",i,buyDay,profits)
                     profits+=tem[i]-tem[buyDay]
                 buyDay=0;
                 hasProfit=false
                 
                 }
             }
         }
         else
         {
             if( i==tem.length-1 && hasProfit)
             {    
                 if(tem[i]>tem[buyDay])
                  profits+=tem[i]-tem[buyDay]
                  
                   console.log( "2",i,profits)
             }
             else
             {
                 if(!hasProfit)
                 { 
                     buyDay=i
                    hasProfit=true
                   
                 }
             }
             
         }
         
    }
    return profits
};
