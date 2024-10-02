console.log('Hello world!');

// select form element from document
var form=document.getElementById('addForm');

//select search box
var search=document.getElementById('filter');


var itemList=document.getElementById('items');


//add event to submit button:
form.addEventListener('submit',addItem);

// add event for delete item form itemlist on X btn click
itemList.addEventListener('click',removeItem);

//add event listener to search box
search.addEventListener('keyup',filterItem);

//add item to itemList
function addItem(e){
    e.preventDefault();
   // get input value form id=item
   var newItem=document.getElementById('item').value;
   console.log(newItem);

   //create new li item
   var li=document.createElement('li');
   //add class Name
   li.className='list-group-item';
   //append new item to list items

   li.appendChild(document.createTextNode(newItem));

   //add delete btn
   var deleteBtn= document.createElement('button');
   //add class to new button
   deleteBtn.className='btn btn-danger btn-sm float-right delete';
   //append text node
   deleteBtn.appendChild(document.createTextNode('X'));
   //add button to li
   li.appendChild(deleteBtn);

   //add li to itemlist:
   itemList.appendChild(li);

}

//remove item form itemlist 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure to delete?")){
            var li= e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}

function filterItem(e){
    console.log(e.target.value);
    //convert text to lower case
    var text=e.target.value.toLowerCase();
    //get the list
    var items=itemList.getElementsByTagName('li');
    //convet HTMLcollection to an array
    Array.from(items).forEach(function (item){

        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })

}