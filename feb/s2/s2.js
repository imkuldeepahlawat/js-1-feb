// --------------------MathematicalOperators-------------------------
        // + addition
        // - subtraction
        // * multiplication
        // / divide
        // % modula ,,use for remainder
        // we can use BODMOS rule here
                        //Answer
        console.log(1+2);//3
        console.log(3-1);//2
        console.log(2/4);//2
        console.log(11%2);//1
// --------------------Relattional & Logical Operators-------------------------
        console.log(1<2);//true
        console.log(2>5);//false
        console.log(1=='1');//true
        console.log(1==1);//true
        console.log(2==='2');//false
        console.log(2===2);//false
        // && and
        // || or
        // < less then
        // > greater then
        // ! is not
// --------------------ifElseStatements-------------------------
        // conditional statements
        if(1<2){
            console.log("1 is less then 2");
        } else{
            console.log("else statement is running");
        }
// --------------------functions-------------------------
        // if any code is repeated more then once, the we can make a function
        // declare a function
        function a(){}//empty function
        // function with some operation
        function b(){
            console.log("Hello Function");
        }
        // --------------------parametric--------------------------------
        function c(a,b){
            console.log(a+b);
        }
        // ------------------------non-paramatric-------------------------
        function d(){
            console.log("Hello Function2");
        }
        // --------------------callingAfunction-------------------------
        b();//printing for Hello Function
        c(5,10);//printing a+b 
// --------------------returningValues-------------------------
        function fnlast(d,c){
            return d*c;
        }
        fnlast(5,2);//10---
        let var1 = fnlast(10,3);//30
        console.log(var1);
