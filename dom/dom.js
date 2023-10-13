//Examine the document object//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent="hello";
//console.log(document.forms);
//console.log(document.links);

//GetElementById //
//console.log(document.getElementById('header-title'));
//var headerTitle =document.getElementById('header-title');
//var header =document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innerText="good";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML ='<h3>hello</h3>';
//header.style.borderBottom ='solid 3px #000';

//GETELEMENTSBYCLASSNAMES//
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent ='hello 2';
//items[1].style.fontWeight ='bold';
//items[1].style.backgroundColor ='red';
//items.style.backgroundColor ='#f4f4f4';
//for(var i=0;i<items.length;i++){
//items[i].style.backgroundColor ='#f4f4f4';
//}

//GETELEMENTSBYCLASSNAMES//
//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent ='hello 2';
//li[1].style.fontWeight ='bold';
//li[1].style.backgroundColor ='red';
//items.style.backgroundColor ='#f4f4f4';
//for(var i=0;i<li.length;i++){
//li[i].style.backgroundColor ='#f4f4f4';
//}

//QUERYSELECTOR//
//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';
//var input=document.querySelector('input');
//input.value='hellow world';
//var submit=document.querySelector('input[type="submit"]');
//submit.value="send";

//var item=document.querySelector('.list-group-item');
//item.style.color='red';
//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='blue';
//var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color='coral';

//QUERY SELECTORAlLL//
//var titles=document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent='hello';
//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');
//for(var i=0;i<odd.length;i++){
 //   odd[i].style.backgroundColor='#f4f4f4';
  //  even[i].style.backgroundColor='#ccc';
//}

//TRAVERSING THE DOM//
var itemList =document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';

//childNodes
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='red';
//FirstChild
//console.log(itemList.firstChild);
//FirstElementChild
//console.log(itemList.firstElementChild);

//nextSibling
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);
//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);

//createElement
//create a div
var newDiv=document.createElement('div');
//AddClass
newDiv.className='hello';
//AddId
newDiv.id='hello1';
//add attr
newDiv.setAttribute('title','hello Div');
//create text node
var newDivText=document.createTextNode('hello World');
//Add text to div
newDiv.appendChild(newDivText);

var container= document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);
