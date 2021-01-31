

// kilometerToMeter
function kilometerToMeter(km)
{
    if(km<0){
        return "Length can't be negative value(Error input)! Please Enter zero or more value (km>=0)"
    }
    var meter=km*1000;
    return meter;
}
var meter=kilometerToMeter(750)
console.log(meter);


// budgetCalculator
function budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop)
{

    var perPriceWatch=50,perPricePhone=100,perPriceLaptop=500;
    if(numberOfWatch<0, numberOfPhone<0, numberOfLaptop<0)
    {
        return "Quantity can't be negative ! (Enter Quantity>=0)"
    }
    var totalBudget=perPriceWatch*numberOfWatch+perPricePhone*numberOfPhone+perPriceLaptop*numberOfLaptop;
    return totalBudget;
}
var totalBudget=budgetCalculator(5,8,6);
console.log(totalBudget);


// hotelCost
function hotelCost(days)
{
    var totalCost,firstDiscount,secondDiscount,thirdDiscount;
    if(days<0)
    {
        return "Wrong value! (Days can't be negative) ! Enter days zero or more>=0";
    }
    else if(days<=10){
        totalCost=days*100;
    }
    else if(days<=20)
    {
        firstDiscount=10*100;
        secondDiscount=(days-10)*80;
        totalCost=firstDiscount+secondDiscount;
    }
    else
    {
        firstDiscount=10*100;
        secondDiscount=10*80;
        thirdDiscount=(days-20)*50;
        totalCost=firstDiscount+secondDiscount+thirdDiscount;
    }
   return totalCost;
}

var totalCost=hotelCost(45)
console.log(totalCost);


//megaFriend
function megaFriend(friends)
{
    var biggestName="";
    for(var i=0;i<friends.length;i++)
    {
      if(friends[i].length > biggestName.length)
      {
        biggestName = friends[i];
      }
    }
    return biggestName;
}

var friendsName=["Rokon","Sher E Bangla A K Fazlul Haque","Dilder","Akkash", "Ashok Bissas"];
var megaName = megaFriend(friendsName);
console.log(megaName);