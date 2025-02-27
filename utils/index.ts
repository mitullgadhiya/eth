export const formatBalance = (rawBalance: string | number): string => {
    const balance = (parseInt(rawBalance.toString()) / 1e18).toFixed(5);
    return balance;
  };
  
  export const formatBalanceWithCondition = (rawBalance: string | number): string => {
    if (!rawBalance || isNaN(Number(rawBalance))) {
      return '0.00'; // Return a default balance if the input is invalid
    }
    const balance = (parseInt(rawBalance.toString()) / 1e18).toFixed(2);
    return balance;
  };
  

  export const formatBalance2d = (rawBalance: string | number): string => {
    const balance = (parseInt(rawBalance.toString()) / 1e18).toFixed(3);
    return balance;
  };
  