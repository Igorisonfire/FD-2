document.addEventListener("DOMContentLoaded", function() {

    let surname = circleFunc('Ваша фамилия?');
    let name = circleFunc('Ваше имя?');
    let patronymic = circleFunc('Ваше отчество?');
    let age = correctAgeFunc('Сколько вам лет?');
    let ageAfterFive = Number(age)+5;
    let isMan = confirm('Ваш пол - мужской?');
    let gender, benefit;


    function circleFunc(message) {
        let result = prompt(message);
        if(!result || result.trim().length === 0){
            result = circleFunc(message)
        }
        return result
    }

    function correctAgeFunc(message) {
        let result = circleFunc(message);

        if(!Number(result) || Number(result) > 120){
            result = correctAgeFunc(message)
        }
        return result
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