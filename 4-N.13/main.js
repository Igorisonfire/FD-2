document.addEventListener("DOMContentLoaded", function () {

  let drinkStorage = new HashStorage();

  let inputInfoButton = document.querySelector('.input-info');
  let getInfoButton = document.querySelector('.get-info');
  let deleteInfoButton = document.querySelector('.delete-info');
  let getDrinksButton = document.querySelector('.get-drinks');

  function inputInfo() {
    let drinkName = prompt('Название напитка:');
    let isAlcohol = confirm('Напиток алкогольный?');
    let recipe = prompt('Рецепт:');

    drinkStorage.addValue(drinkName, {isAlcohol: isAlcohol, recipe: recipe})
  }

  function getInfo() {
    let drinkName = prompt('Название напитка:');
    let isAlcohol = drinkStorage.getValue(drinkName).isAlcohol ? 'да' : 'нет';
    let recipe = drinkStorage.getValue(drinkName).recipe;

    alert('напиток ' + drinkName + '\n' +
    'алкогольный: ' + isAlcohol + '\n' +
    'рецепт приготовления: ' + recipe)
  }

  function deleteInfo() {
    let drinkName = prompt('Название напитка:');
    let info = drinkStorage.deleteValue(drinkName) ? 'Напиток удален' : 'Напиток не найден';
    alert(info)
  }

  function getDrinks() {
    let info = drinkStorage.getKeys();
    alert(info)
  }


  inputInfoButton.addEventListener('click', inputInfo);
  getInfoButton.addEventListener('click', getInfo);
  deleteInfoButton.addEventListener('click', deleteInfo);
  getDrinksButton.addEventListener('click', getDrinks);

});