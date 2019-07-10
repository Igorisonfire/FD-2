document.addEventListener("DOMContentLoaded", function() {

    let surname = prompt('Ваша фамилия?', '');
    let name = prompt('Ваше имя?', '');
    let patronymic = prompt('Ваше отчество?', '');
    let age = prompt('Сколько вам лет?', '');
    let ageAfterFive = Number(age)+5;
    let isMan = confirm('Ваш пол - мужской?');
    let gender, benefit;

    if(surname){
        return
    }


    function genderBenefitFun(yourAge, benefitAge) {
        return yourAge >= benefitAge ? 'да' : 'нет';
    }

    if(isMan){
        gender = 'мужской';
        benefit = genderBenefitFun(age, 60)

    } else {
        gender = 'женский';
        benefit = genderBenefitFun(age, 55)
    }

    let fullNameStr = 'ваше ФИО: ' + surname + ' ' + name + ' ' + patronymic + '\n';
    let ageYearsStr = 'ваш возраст в годах: ' + age + '\n';
    let ageDaysStr = 'ваш возраст в днях: ' + age*365 + '\n';
    let afterFiveYearsStr = 'через 5 лет вам будет: ' + ageAfterFive + '\n';
    let genderStr = 'ваш пол: ' + gender + '\n';
    let benefitStr = 'вы на пенсии: ' + benefit;

    alert(fullNameStr + ageYearsStr + ageDaysStr + afterFiveYearsStr + genderStr + benefitStr)
});