
/*-------------------------------------DoM Button Events-----------------------------------------
------------------------------------------------------------------------------------------------

var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function(){
    alert('You Clicked Emergency Button? What Happend!');
    var reason = prompt('Enter Reason For clicking');
    console.log(reason);
});
	
----------------------------------------------------------------------------------------------*/

/*---------------------------------Grabbing Inputs-------------------------------------------
-------------------------------------------------------------------------------------------*/

var input = document.getElementById('dom');
var button = document.getElementById('search');
var ul = document.querySelector('ul');


/*---------------------------------Creating Dynamic List----------------------------------------
----------------------------------------------------------------------------------------------



button.addEventListener('click', function(){

if(input.value.length>0){
var li = document.createElement('li');
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value = '';
}

else{
	alert('Enter Some Value First!')
    }
});

input.addEventListener('keypress' , function(press){
	if(press.which === 13){
var li = document.createElement('li');
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value = "";
}
});

/*-------------change them all to a functions------------
-------------------------------------------------------*/

function inputvaluelength () {
 
return  input.value.length;

}

function createlist () {
	if(inputvaluelength()>0){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
}
else {
	alert('Enter Some Value')
}
}

function createlistByKeypress (press) {
	if(inputvaluelength()>0 && press.which === 13 ){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
}

}

button.addEventListener('click' , createlist);
input.addEventListener('keypress' , createlistByKeypress);




/*----------------------------------------------------------Creating Facebook Posts-----------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------*/

var post = document.getElementById('post');
var postbtn = document.getElementById('postbtn');
var box = document.getElementById('box');
var img = document.getElementById('img');

function postlength(){
	return post.value.length;
}

function createpost(){
    if(postlength()>0){
	var createpost = document.createElement('post');
createpost.appendChild(document.createTextNode(post.value));
box.appendChild(createpost);
post.value= "";
}
else{
	alert('Enter some content')
}
}


function createpostByKeypress(events){

	if(postlength()>0 && events.which === 13){

	var createpost = document.createElement('post');
createpost.appendChild(document.createTextNode(post.value));
box.appendChild(createpost);
post.value= "";
}
 }






postbtn.addEventListener('click', createpost);
post.addEventListener('keypress',createpostByKeypress);















