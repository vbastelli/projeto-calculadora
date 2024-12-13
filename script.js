const caixa = document.querySelector('.caixa');
const simbolos = document.querySelectorAll('.simbolos');

const numeros = document.querySelectorAll('.numeros');

let currentInput = '0';
caixa.innerHTML = currentInput;

numeros.forEach(button => {
  button.addEventListener("click", function(e) {
      const number = e.target.textContent; 
      if(currentInput === '0'){
          currentInput = number;
          caixa.innerHTML = currentInput;
      } else {
    currentInput += number
    caixa.innerHTML = currentInput;
    }
  });
});

simbolos.forEach(button => {
  button.addEventListener("click", function(e) {

    if(e.target.textContent === 'C'){
        currentInput = '0';
        caixa.innerHTML = currentInput;
    } 

    else if(e.target.textContent === '='){
        const result = eval(currentInput);
        currentInput = result.toString();
        caixa.innerHTML = currentInput;
    } 
    
    else if(e.target.textContent === 'DEL'){
        currentInput = currentInput.slice(0, -1);
        caixa.innerHTML = currentInput;
    }

    else {
        const simbolo = e.target.textContent; 
        currentInput += simbolo;
        caixa.innerHTML = currentInput;
    }

  });
});
