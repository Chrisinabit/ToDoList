var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput").value.length;
var item = document.getElementsByTagName("li");



function listLength(){      
	return item.length;
}
    function createListElement(){
    var inputValue = document.getElementById("userInput").value;	
    var dBtn = document.createElement("button");		//creates delete button
    var jack = document.createTextNode("X");
	var list = document.createElement("li"); 	//Creates a list element
	var jin =  document.createTextNode(inputValue);  //Makes text nodes from input field 
		(dBtn).appendChild(jack);
	 	(list).appendChild(dBtn);
	 	(list).appendChild(jin);
	 	
	
	document.querySelector(".list-items").appendChild(list);
	document.getElementById("userInput").value = " ";    //resets input field
	
	dBtn.onclick = function deleteListItem(){
			
						list.classList.add("delete");			
	}
	list.onclick = function crossOut(){
					list.classList.toggle("done");
	}
}
		
	

	function addListAfterClick(){												
		if  (document.getElementById("userInput").value.length > 0 ){
			
		// alert("I did it");
		createListElement();
		}
		else if (input == ""){ 						//Makes sure an empty field doesn't create a list
			alert("You must write something");												 
	}
	}
		
	 	 
