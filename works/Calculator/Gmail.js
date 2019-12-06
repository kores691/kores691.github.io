// Функция, которая скрывает каждое третье письмо в Gmail

function hideEveryThirdMail(item) {
    let emailList =  document.querySelectorAll(item);
    emailList.forEach((item, i) => {
        if ((i + 1) % 3 === 0) {
            item.style.display = 'none';
        }
    })
}

hideEveryThirdMail('.zA');
