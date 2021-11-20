class IncorrectInput extends Error {
  constructor(message) {
    super(message);
    this.name = "IncorrectInputError";
  }
}

window.addEventListener("DOMContentLoaded", init);

function init(){
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    let result1, result2;

    try{
      result1 = isNaN(firstNum);
      if(isNaN(firstNum)){
        throw new TypeError("Please use numbers");
      }  

      result2 = isNaN(secondNum);
      if(isNaN(secondNum)){
        throw new IncorrectInput("Please use only numbers");
      }  
    }catch(err){
      console.log(err.message);

    }finally{
      if(!result1 && !result2){
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      }
      else{
        alert("Please enter numbers for the first and second field.");
      }
    }
  });

  let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

  // Console Log
  document.getElementById("log").addEventListener("click", function(event){
    console.log("Console Log Demo");
  });

  // Condole Error
  document.getElementById("error").addEventListener("click", function(event){
    console.error("Console Error Demo");
  });


  // Condole Count
  document.getElementById("count").addEventListener("click", function(event){
    console.count();
  });

  // Condole Warn
  document.getElementById("warn").addEventListener("click", function(event){
    console.warn("Console Warn Button");
  });

  const number = 2;
  const y = 3;
  const errorMsg = `The number does not equal 3`;
  // Console Assert
  document.getElementById("assert").addEventListener("click", function(event){
    console.assert(number == 3, {number, errorMsg});
  });

  // Console Clear
  document.getElementById("clear").addEventListener("click", function(event){
    console.clear();
  });

  // Console Dir
  document.getElementById("dir").addEventListener("click", function(event){
    console.dir(this);
  });

  // Console Dirxml
  document.getElementById("dirxml").addEventListener("click", function(event){
    console.dirxml(this);
  });

  // Console Group Start
  document.getElementById("groupStart").addEventListener("click", function(event){
    console.group();
  });

  // Console Group End
  document.getElementById("groupEnd").addEventListener("click", function(event){
    console.groupEnd();
  });

  // Console Table
  document.getElementById("table").addEventListener("click", function(event){
    console.table([
      {
        name: 'Java',
        num: '110',
      },
      {
        name: 'C++',
        num: '130',
      },
      {
        name: 'Python',
        num: '112',
      }
    ]);
  });

  // Console Start Timer
  document.getElementById("startTimer").addEventListener("click", function(event){
    console.time("Timer Button");
  });

  // Console End Timer
  document.getElementById("endTimer").addEventListener("click", function(event){
    console.timeEnd("Timer Button");
  });

  // Console Trace
  document.getElementById("trace").addEventListener("click", function(event){
    const deepest = () => { deeper(); };
    const deeper = () => { deep(); };
    const deep = () => { top(); };
    const top = () => { console.trace(); };
    deepest();
  });

  let errorMSG = "Sadly an error has occurred";
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log(errorMSG);
  }

  // Console End Timer
  document.getElementById("globalError").addEventListener("click", function(event){
    print(x);
  });

  // try{
  //   var check = false;
  //   const button = document.getElementById("log");
  //   button = document.getElementById("error");
  // } catch(err){
  //   check = true;
  //   console.log("An error has occured");
  //   console.log(err);
  // }finally{
  //   if(check){
  //     console.log("Please resolve error");
  //   } 
  //   else{
  //     console.log("No errors");
  //   }
  // } 

  // try{
  //   var check = false;
  //   const button = document.getElementById("log");
  // } catch(err){
  //   check = true;
  //   console.log("An error has occured");
  //   console.log(err);
  // }finally{
  //   if(check){
  //     console.log("Please resolve error");
  //   } 
  //   else{
  //     console.log("No errors");
  //   }
  // } 
}

