var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Stores the net total of all profits and lossed during the entire period.
var netTotalOfProfitsAndLosses = 0;

// A new array created to store the changes in profits/losses for each month.
var changesInProfitsAndLosses = [0];

// Stores the total of profit changes for the entire period.
var totalOfProfitChanges = 0;
var averageOfProfitChanges;
var averageRoundedNumber;

// These values contain the greatest increase/decrease in profits for the entire period.
var greatestIncInProfits;
var greatestDecInProfits;

// Index of the changesInProfitsAndLosses array that represents the date and value for the greatest increase/decrease in profits.
var greatestIncIndex = 0;
var greatestDecIndex = 0;

for(var i=0; i<finances.length; i++) {
    
    // Getting the sum of all the profits and losses for the entire period.
    netTotalOfProfitsAndLosses = netTotalOfProfitsAndLosses + finances[i][1];

    // Creating another array to store the changes in Profits/Losses for each month, during the entire period.
    if(finances[i+1] != undefined) {
        changeValue = finances[i+1][1] - finances[i][1];
        changesInProfitsAndLosses[i] = [finances[i+1][0], changeValue];
    }
    
}

for(var x=0; x<changesInProfitsAndLosses.length; x++) {

    // Getting the sum of all the changes in Profits/Losses for the entire period.
    totalOfProfitChanges = totalOfProfitChanges + changesInProfitsAndLosses[x][1];

    if(x == 0){

        // Initiallizing the greatest increase/decrease in profits to the first month.
        greatestIncInProfits = changesInProfitsAndLosses[x][1];
        greatestDecInProfits = changesInProfitsAndLosses[x][1];

    } else if(changesInProfitsAndLosses[x][1] > greatestIncInProfits){

        // If the change in profit is greater than the stored value it is replaced with the current value. 
        greatestIncInProfits = changesInProfitsAndLosses[x][1];
        
        // Storing the index for the greatest increase in profits.
        greatestIncIndex = x;

    } else if(changesInProfitsAndLosses[x][1] < greatestDecInProfits){

        // If the change in profit is less than the stored value it is replaced with the current value.
        greatestDecInProfits = changesInProfitsAndLosses[x][1];

        // Storing the index for the greatest decrease in profits.
        greatestDecIndex = x;

    }

}

// Average of the profit changes for the entire period and rounding off the resulting value.
averageOfProfitChanges = totalOfProfitChanges / changesInProfitsAndLosses.length;
averageRoundedNumber = Math.round(averageOfProfitChanges * 100) / 100;

// All the above calculated results are printed to the console to display the financial analysis report.
console.log(`
Financial Analysis
---------------------------

Total Months: ${finances.length}

Net Total of Profits and Loses: \$${netTotalOfProfitsAndLosses}

Average change: \$${averageRoundedNumber}

Greatest Increase in Profits: ${changesInProfitsAndLosses[greatestIncIndex][0]} (\$${changesInProfitsAndLosses[greatestIncIndex][1]})

Greatest Decrease in Profits: ${changesInProfitsAndLosses[greatestDecIndex][0]} (\$${changesInProfitsAndLosses[greatestDecIndex][1]})

`);