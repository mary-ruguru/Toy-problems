// This is a program to calculate an individual's net salary by getting the inputs of basic salary and benefits
// calculate the payee, NHIF deductions,Nssf Deductions,gross salary and net salary

let grossSalary = 700000;
let payee;
let Nssf;
let nssfSelection = "oldRate"; //nssf options include;"newRateT1","newRateT2" & "oldRate"
let nhif;

function calculateNetSalary(){
    calculateNssf();
    calculatePayee();
    calculateNhif();

    let NETsALARY = grossSalary-Nssf-nhif-(paye/100*grossSalary);
    return console.log(`For Gross salary ${grossSalary},Net salary is ${NETsALARY}.
    PAYE equals ${payee/100*grossSalary},NSSF equals ${Nssf} and NHIF equals ${nhif}`);
}
(calculateNetSalary());

// ................PAYEE...................
//Monthly Taxable Pay(Ksh)   Rate of Tax(%)
//Up to 24,000                  10%
//24,001-32,333                  25%
//Above 32,333                   30%

//let grossSalary = 70000;
function calculatePayee(){
    switch(true){
        case(grossSalary <= 24000):
        payee = 10;
        break;
        case(grossSalary <= 32333):
        payee = 25;
        break;
        case(grossSalary > 32333):
        payee = 30;
        break;
    }
    return payee;
}

//console.log(calculatePayee());
//................NHIF..............
//Gross Pay (Ksh)  Deduction(Ksh)  Gross Pay(Ksh)   Deduction(Ksh)
//Upto 5,999        150           40,000-44,999      1,000
//6,000-7,999       300           45,000-49,999      1,100
//8,000-11,999      400           50,000-59,999      1,200
//12,000-14,999     500           60,000-69,999      1,300
//15,000
//20,000
//25,000
//30,000
//35,000

function calculateNhif(){
    switch(true){
        case(grossSalary <= 5999):
        nhif = 150;
        break;
        case(grossSalary <= 7999):
        nhif = 300;
        break;
        case(grossSalary <= 11,999):
        nhif = 400;
        break;
        case(grossSalary <= 14,999):
        nhif = 500;
        break;
        case(grossSalary <= 19,999):
        nhif = 600;
        break;
        case(grossSalary <= 24,999):
        nhif = 750;
        break;
        case(grossSalary <= 29,999):
        nhif = 850;
        break;
        case(grossSalary <= 34,999):
        nhif = 900;
        break;
        case(grossSalary <= 39,999):
        nhif = 950;
        break;
        case(grossSalary <= 49,999):
        nhif = 1100;
        break;
        case(grossSalary <= 59,999):
        nhif = 1200;
        break;
        case(grossSalary <= 69,999):
        nhif = 1300;
        break;
        case(grossSalary <= 79,999):
        nhif = 1400;
        break;
        case(grossSalary <= 89,999):
        nhif = 1500;
        break;
        case(grossSalary <= 99,999):
        nhif = 1600;
        break;
        case(grossSalary <= 100000):
        nhif = 1700;
        break;
    }
    return nhif;
}

//...............NSSF.................
//NEW RATES
//tier1 6% of gros to max of 6000....tier2 6% of gross to max of 18000 and min of 6001
//OLD RATES
//5% of gross to max of 400

function calculateNssf(){
    if(nssfSelection === "newRateT2"){
        Nssf = grossSalary * 6/100;
        if(Nssf > 6000){
            Nssf = 6000;
        }
        return Nssf;

    }else if(nssfSelection === "newRateT2"){
        Nssf = grossSalary *6/100;
        if(Nssf<6001){
            Nssf = 6001;
            return Nssf;
        } else if(Nssf>18000){
            Nssf = 18000
        }
        return Nssf;
    }
    else if(nssfSelection === "oldRate"){
        Nssf = grossSalary * 5/100;
        if(Nssf > 400){
            Nssf = 400;
        }
        return Nssf;
    
    }
    return Nssf;
}