const minNumberInput = document.getElementById("min-number");
const maxNumberInput = document.getElementById("max-number");
const quantityInput = document.getElementById("quantity");
const sortButton = document.getElementById("sort-button");
const resultText = document.getElementById("result-text");

sortButton.addEventListener("click", () => {
  const minNumber = parseInt(minNumberInput.value);
  const maxNumber = parseInt(maxNumberInput.value);
  const quantity = parseInt(quantityInput.value);

  // Verifica se todos os campos são números
  if (isNaN(minNumber) || isNaN(maxNumber) || isNaN(quantity)) {
    resultText.innerHTML = "Digite um valor válido!";
    resultText.style.color = "red";
    return;
  }

  // Verifica se todos os valores são maiores que zero
  if (minNumber < 0 || maxNumber < 0 || quantity < 1) {
    resultText.innerHTML = "Digite valores maiores que 0!";
    resultText.style.color = "red";
    return;
  }

  // Verifica se o número mínimo é menor ou igual ao máximo
  if (minNumber >= maxNumber) {
    resultText.innerHTML =
      "O número mínimo deve ser menor que o número máximo!";
    resultText.style.color = "red";
    return;
  }

  // Verifica se a quantidade não é maior que o intervalo
  if (quantity > maxNumber - minNumber + 1) {
    resultText.innerHTML =
      "A quantidade não pode ser maior que o intervalo de números possíveis!";
    resultText.style.color = "red";
    return;
  }

  // Lógica para sortear os números
  const result = [];
  for(let i = 0; i < quantity; i++){
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    } while (result.includes(randomNumber));
    result.push(randomNumber);
  }
  resultText.innerHTML = `Números sorteados:  ${result.join(" , ")}`;
  resultText.style.color = "green";

});
