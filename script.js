"use strict ";
const FirstBank = "*894#";
const gtb = "*737#";
const ecoBank = "*326#";
const unionBank = "*826#";
const zenithBank = "*966#";

const ussd = prompt("Enter USSD ");
if (
  ussd == FirstBank ||
  ussd == gtb ||
  ussd == unionBank ||
  ussd == zenithBank
) {
  let selectOptions = prompt(
    "Welcome to USSD banking \n 1. Transfer money \n 2. Airtime(self) \n 3. Airtime(others)  \n 4. Data  "
  );
  if (selectOptions == 1) {
    let amount = prompt("Enter amount");
    if (amount > 0) {
      let acctNum = prompt("Enter account number");
      if (acctNum) {
        let bank = prompt(
          "Select reicipant bank \n 1. First Bank \n 2. GTB \n 3. Union Bank \n 4 Zennith bank"
        );
        if (bank == 1 || bank == 2 || bank == 3 || bank == 4) {
          let pin = prompt(
            `Transfer of ${amount} to ${acctNum} at 10 charge \n Plese enter 5 digit pin`
          );
          if (pin) {
            alert(`Transfer of ${amount} to ${acctNum} was successful`);
          }
        }
      }
    }
  } else if (selectOptions == 2) {
    let airtimeSlef = prompt("Enter amount");
    if (airtimeSlef) {
      alert(`Recharge of ${airtimeSlef} was successful`);
    }
  } else if (selectOptions == 3) {
    let airtimeOthers = prompt("Enter amount");
    let partyNumber = prompt("Enter recipiant number");
    alert(`The recharge of ${airtimeOthers} to ${partyNumber} was successfull`);
  } else if (selectOptions == 4) {
    let dataOptions = prompt("select options \n 1. Self \n 2. others");
    if (dataOptions == 1 || dataOptions == 2) {
      let dataSubsciption = prompt(
        "1. 200 for 1GB \n 2. 500 for 20Gb\n 3.1000 for 100Gb"
      );
      if (
        dataSubsciption == 1 ||
        dataSubsciption == 2 ||
        dataSubsciption == 3
      ) {
        alert(`Transfer of ${dataSubsciption} is successfull`);
      }
    }
  }
}
