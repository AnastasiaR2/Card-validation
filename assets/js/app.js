
  let card = prompt('Введите номер карты:');

  console.log(`Карта: ${card}`);

  let cardCheck = card.split('').reverse().map( (item) => +item );

  for(let i = 1; i < cardCheck.length; i = i + 2){
    cardCheck[i] = cardCheck[i] * 2;
    if(cardCheck[i] >= 10){
      cardCheck[i] = cardCheck[i] - 9;
    }
  }

  let sum = cardCheck.reduce((acc, item) => acc + item, 0);

  if(sum % 10 == 0){
    console.log('Карта корректная');

    let twoNumbers = card.slice(0, 2);
    let fourNumbers = card.slice(0, 4);
    let sixNumbers = card.slice(0, 6);

    if(card[0] == 4){
      console.log('Платежная система: Visa');
    }else if(twoNumbers >= 51 && twoNumbers <= 55 || sixNumbers >= 222100 && sixNumbers <= 272099){
      console.log('Платежная система: MasterCard');
    }else if(fourNumbers == 5018 || fourNumbers == 5020 || fourNumbers == 5038 || fourNumbers == 5893 || fourNumbers == 6304 || fourNumbers == 6759 || fourNumbers == 6761 || fourNumbers == 6762 || fourNumbers == 6763){
      console.log('Платежная система: Maestro');
    }else {
      console.log('Платежная система: Другая');
    }
  }else {
    console.log('Карта НЕ корректная');
  }
