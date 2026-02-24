document.querySelector('#elastic').oninput = function (){
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.job-ctalog-element');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
    let elasticItem = document.querySelectorAll('.job-catalog-spoiler-second');
    if (val != '') {
        elasticItem.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItem.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}