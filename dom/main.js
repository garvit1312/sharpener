var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter =document.getElementById('filter');
//Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click',removeItem);
//Filter Event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    //Get input value
    var newItem= document.getElementById('item').value;
    //Create new li element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create del button Element
    var deletebtn= document.createElement('button');
    //Add classes to del Button
    deletebtn.className="btn btn-danger btn-sm float-right delete";
    //Append text node
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemList.appendChild(li);
}
//Remove Element
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//Filter Items
function filterItems(e){
    //convert text to lower case
    var text=e.target.value.toLowerCase();
    //Get lis
    var items=itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display ='bock'; 
         }else{
            item.style.display='none';
         }
    })
}