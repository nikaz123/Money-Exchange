// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {


        let myObject = {};
        if (currency >= 10000) {
            myObject.error = `You are rich, my friend! We don't have so much coins for exchange`;
            return myObject;
        }



               if (currency > 0 && currency < 10000) {

            let h = currency % 50;   ///45

             if ((currency - h) / 50!=0)

            myObject.H = (currency - h) / 50; ////7


            let q = h % 25;  //// 20

                   if ((h - q) / 25!=0)

            myObject.Q = (h - q) / 25;

            let d = q % 10;
                   if ((q - d) / 10!=0)

            myObject.D = (q - d) / 10;

            let n = d % 5;

                   if ((d - n) / 5!=0)



                       myObject.N = (d - n) / 5;

            let p = n % 1;
                   if ((n - p)!=0)

            myObject.P = (n - p);

            console.log (myObject);


        }
    return myObject;




        // Your code goes here!
        // Return an object containing the minimum number of coins needed to make change
    }
