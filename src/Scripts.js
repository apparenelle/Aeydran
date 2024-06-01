export function itemBalanceWidthCalculator(yourClass){    
    let count = document.getElementsByClassName(yourClass).length;
    let width = Math.floor(100/(count/2)*0.75).toString();
    return width;
}