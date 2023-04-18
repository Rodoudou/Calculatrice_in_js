let restart = false;
let result;
let choix;
let premierNombre, deuxiemeNombre;

// Opérations
const additionOperation = (premierNombre, deuxiemeNombre) => {
  result = premierNombre + deuxiemeNombre;
  console.log("result =>", result);
  return `Le résultat de ${premierNombre} + ${deuxiemeNombre} = ${result}`;
};

const multiplicationOperation = (premierNombre, deuxiemeNombre) => {
  result = premierNombre * deuxiemeNombre;
  console.log("result =>", result);
  return `Le résultat de ${premierNombre} x ${deuxiemeNombre} = ${result}`;
};

const soustractionOperation = (premierNombre, deuxiemeNombre) => {
  result = premierNombre - deuxiemeNombre;
  console.log("result =>", result);
  return `Le résultat de ${premierNombre} - ${deuxiemeNombre} = ${result}`;
};

const divisionOperation = (premierNombre, deuxiemeNombre) => {
  result = premierNombre / deuxiemeNombre;

  if (deuxiemeNombre == 0) {
    alert("Impossible de diviser par 0.");
    console.log("result =>", result);
    throw new Error("Impossible de diviser par 0.");
  } else {
    return `Le résultat de ${premierNombre} / ${deuxiemeNombre} = ${result}`;
  }
};

try {
  do {
    choix = Number(
      prompt(`
            Que souhaitez-vous faire ?\n\n 
            1 - Addition \n
            2 - Multiplication\n
            3 - Soustraction\n
            4 - Division
            `)
    );
    console.log("choix", choix);
  } while (choix !== 1 && choix !== 2 && choix !== 3 && choix !== 4);

  do {
    premierNombre = parseInt(prompt("Quel est votre premier nombre"));
    deuxiemeNombre = parseInt(prompt("Quel est votre deuxième nombre"));
    console.log(
      "premierNombre et deuxiemeNombre",
      premierNombre,
      deuxiemeNombre
    );
  } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

  switch (choix) {
    case 1:
      alert(additionOperation(premierNombre, deuxiemeNombre));
      break;
    case 2:
      alert(multiplicationOperation(premierNombre, deuxiemeNombre));
      break;
    case 3:
      alert(soustractionOperation(premierNombre, deuxiemeNombre));
      break;
    case 4:
      alert(divisionOperation(premierNombre, deuxiemeNombre));
      break;
    default:
      alert(" Recommence, j'ai rien pigé !");
  }
} catch (error) {
  alert(error);
}

restart = confirm("Voulez-vous refaire un calcul ?");
if (restart) {
  window.location.reload(); // recharger la page si l'utilisateur veut refaire un calcul
} else {
  alert("Merci d'avoir utilisé notre calculatrice !");
}



