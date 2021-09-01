
// const numberOfPassangers = 10;
// for (let i = 0; i < numberOfPassangers; i++ ){
//     console.log('passanger boarded');  
// }
// console.log('all passnger boarded');

// const passangers = [
//     'tonton',
//      'morton',
//       'ponton',
//        'bonton'
// ]
// for( let i in passangers){
//     console.log('boarding ' +  passangers[i]);
// }
// const passangers = [
//     {
//         name:'alfie',
//         ticketnumber:2020
//     },
//       {
//         name:'m ar alfie',
//         ticketnumber:2021
//     },
//       {
//         name:'m arfan alfie',
//         ticketnumber:2022
//     },
// ];

// for (let passanger of passangers){
//     console.log('Boarding passenger '+ 'with ticket number '+ passanger.name)
// }
///-----Three types of Errors----//

// typos
// incorrect uese of variables
class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log('Balance: ' + this.balance + ' EUR')
    }
     deposit(amount) {
        console.log('Depositing ' + amount + ' EUR');
        this.balance += amount;
        this.showBalance();
    }
    withdraw(amount) {
       if (amount > this.balance){
           console.log("access denied!!!!")
       }
       else{
           console.log('Withdrawing ' + amount + ' EUR')
       }
       this.balance -= amount;
    }
}
const newAccount = new BankAccount ('alfie', 5000);
newAccount.showBalance();
newAccount.deposit(500);
newAccount.withdraw(2200);