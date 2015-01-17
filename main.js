var makeHtmlTags = function (str, onCheck) {
    var delEll = document.createElement('button');
    var newLi = document.createElement('li');
    var newInput = document.createElement('input');
    var newSpan = document.createElement('span');
    var newLinkTop = document.createElement('button');
    var newLinkBottom = document.createElement('button');
    newLinkTop.textContent = '^';
    newLinkTop.className = " linkTop";
    newLinkTop.addEventListener('click', toTop);
    newLinkBottom.textContent = 'v';
    newLinkBottom.className = " linkBottom";
    newLinkBottom.addEventListener('click', toBottom);
    newSpan.textContent = str;
    newInput.addEventListener('click', onCheck);
    newInput.type = 'checkbox';
    delEll.textContent = 'X';
    delEll.addEventListener('click', onChecked);
    newLi.appendChild(delEll);
    newLi.appendChild(newInput);
    newLi.appendChild(newSpan);
    newLi.appendChild(newLinkTop);
    newLi.appendChild(newLinkBottom);
    return newLi;
};
function toTop(event) {
    var arr = document.querySelector(".list").children;
    var ol = document.querySelector(".list");
    if (arr.length > 1) {
        tar = event.target.parentElement;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == tar && i != 0) {
                ol.insertBefore(arr[i], arr[i - 1]);
            }
        }
    }
};
function toBottom(event) {
    var arr = document.querySelector(".list").children;
    var ol = document.querySelector(".list");
    if (arr.length > 1) {
        tar = event.target.parentElement;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == tar) {
                if (arr[i + 2]) {
                    ol.insertBefore(arr[i], arr[i + 2]);
                }
            }
        }
    }
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
            arr[i].parentElement.style.display = "block";
    }
};
var addedText = function (task) {
    var list = {
        addList: document.querySelector('.list')
    };
    list.addList.appendChild(task);
};
var onCheck = function (event) {
    var task = event.target.parentElement;
    var arr = [];
    arr = document.querySelectorAll('.list input');
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i].checked === true) {
            arr[i].parentElement.style.textDecoration = "line-through";
        } else {
            arr[i].parentElement.style.textDecoration = "none";
        }
    }
};
var onInput = function () {
    var str = document.querySelector('#inputEll').value;
    if (str.length > 0) {
        addedText(makeHtmlTags(str, onCheck));
    }
    document.querySelector('#inputEll').value = '';
    document.querySelector('#inputEll').focus();
};
var onChecked = function (event) {
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
};
var checkAllBox = function (event) {
    var newArr = [];
    var newArr1 = [];
    newArr = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i <= newArr.length - 1; i++) {
        if (checkAll.checked === true) {
            newArr[i].checked = true;
        } else {
            newArr[i].checked = false;
            checkAll.checked = false;
        }
    }
};
window.addEventListener('load', function () {
    var input = document.querySelector('#inputEll');
    var checkAll = document.querySelector('#checkAll');
    var btn = document.querySelector('#btn');
    var delChecked = document.querySelector('#delChecked');
    var viewChecked = document.querySelector('#viewChecked');
    var viewUnChecked = document.querySelector('#viewUnChecked');
    var viewAll = document.querySelector('#viewAll');
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
});