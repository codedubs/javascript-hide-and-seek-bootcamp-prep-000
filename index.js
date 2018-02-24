

function getFirstSelector(selector) {

  return document.querySelector(selector);

}

function nestedTarget() {

  return document.getElementById('nested').querySelector('div.target')

}

function increaseRankBy(n) {

  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {

    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;

  }
}

function deepestChild() {


var newDivs = [];
newDivs.push(document.getElementById('grand-node').querySelectorAll('div'))

function find(newDivs, criteriaFn){
for (let i = 0; i < newDivs.length; i++) {

  if (criteriaFn(newDivs[i])) {
    return newDivs;

}
}

}
return newDivs;
}
