(function () {
    var input = document.querySelector('#inputEll');
    var checkAll = document.querySelector('#checkAll');
    var btn = document.querySelector('#btn');
    var delChecked = document.querySelector('#delChecked');
    var viewChecked = document.querySelector('#viewChecked');
    var viewUnChecked = document.querySelector('#viewUnChecked');
    var viewAll = document.querySelector('#viewAll');
    var list = {
        addList: document.querySelector('.list')
    };
    var makeHtmlTags = function (str, onCheck) {
        var newBtn = document.createElement('button');
        var newLi = document.createElement('li');
        var newInput = document.createElement('input');
        var newSpan = document.createElement('span');
        newSpan.textContent = str;
        newInput.addEventListener('click', onCheck);
        newInput.type = 'checkbox';
        newBtn.textContent = 'X';
        newBtn.addEventListener('click', onCheked);
        newLi.appendChild(newBtn);
        newLi.appendChild(newInput);
        newLi.appendChild(newSpan);
        return newLi;
    };
    var viewCheckedBox = function (event) {
        var arr = [];
        arr = document.querySelectorAll('.list input');
        for (var i = 0; i <= arr.length - 1; i++) {
            if (arr[i].checked === true) {
                arr[i].parentElement.style.display = "block";
            } else {
                arr[i].parentElement.style.display = "none";
            }
        }
    };
    var viewUnCheckedBox = function (event) {
        var arr = [];
        arr = document.querySelectorAll('.list input');
        for (var i = 0; i <= arr.length - 1; i++) {
            if (arr[i].checked === false) {
                arr[i].parentElement.style.display = "block";
            } else {
                arr[i].parentElement.style.display = "none";
            }
        }
    };
    var viewAllList = function (event) {
        var arr = [];
        arr = document.querySelectorAll('.list input');
        for (var i = 0; i <= arr.length - 1; i++) {
            if (arr[i].checked === false) {
                arr[i].parentElement.style.display = "block";
            } else {
                arr[i].parentElement.style.display = "block";
            }
        }
    };
    var addedText = function (task) {
        list.addList.appendChild(task);
    };
    var onCheck = function (event) {
        var task = event.target.parentElement;
    };
    var onInput = function () {
        var str = input.value;
        if (str.length > 0) {
            addedText(makeHtmlTags(str, onCheck));
        }
        input.value = '';
        input.focus();
    };
    var onCheked = function (event) {
        var task = event.target.parentElement;
        task.remove('li');
    }
    var delCheckBox = function (event) {
        var arr = [];
        arr = document.querySelectorAll('.list input');
        for (var i = 0; i <= arr.length - 1; i++) {
            if (arr[i].checked === true) {
                ell = arr[i].parentElement.remove();
            }
        }
        ;
    };
    var checkAllBox = function (event) {
        var newArr = [];
        var newArr1 = [];
        newArr = document.querySelectorAll('input');
        for (var i = 0; i <= newArr.length - 1; i++) {
            if (checkAll.checked === true) {
                newArr[i].checked = true;
            } else {
                newArr[i].checked = false;
                checkAll.checked = false;
            }
        }
        ;
    };
    viewAll.addEventListener('click', viewAllList);
    viewUnChecked.addEventListener('click', viewUnCheckedBox);
    viewChecked.addEventListener('click', viewCheckedBox);
    delChecked.addEventListener('click', delCheckBox);
    checkAll.addEventListener('click', checkAllBox);
    btn.addEventListener('click', onInput);
    input.addEventListener('keyup', function (event) {
        var code = event.keyCode;
        if (code === 13) {
            onInput();
            input.value = '';
            input.focus();
        }
    });
    input.focus();
})();