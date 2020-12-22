function postChat() {
	// create a P tag to become the post
	let userPost = document.createElement( "P" );
	// Get the "userInput" from the form 
	let userContent = document.getElementById( "userInput" ).value;
	
	//set the userInput as content
	let userText = document.createTextNode( userContent );
	
	// add that text to the P tag
	userPost.appendChild( userText );
	// give the P tag a class 
	userPost.classList.add( "userPost" );
	
	// get the chatWindow and add the Post to it
	document.getElementById( "chatWindow" ).appendChild( userPost );
	//document.getElementById('my').style.visibility='visible';


//var timer = setInterval("show_image()", 3000);
//clearInterval(timer);
let img = document.createElement('img'); 
            img.src = './img/tenor.gif'; 
            document.getElementById('body').appendChild(img); 
	


	
	
	
	// you can call a function with a timer
	// this calls the function after 4 sec.
	
	setTimeout( botAnswer, 4000 );

	// this calls the function every 4 sec.
	//setInterval(botAnswer, 4000);
}

function botAnswer() {
	
	// create a P tag to become the post
	let botPost = document.createElement( "P" );
	
	// make an array with some text in
	let aArray = [ "Apples", "Bananas", "Pears" ];
	
	// Math.floor rounds a number down, 1.6 become 1.
	// Math.random outputs a random value between 0 and 1
	let randomNumber= Math.floor( Math.random() * aArray.length )
	
	//use the randomNumber to pick an random text from the array
	let randomText = aArray[randomNumber];
	
	//set the text as content
	let botText = document.createTextNode( randomText );
	// add that text to the P tag
	botPost.appendChild( botText );
	// give the P tag a class for the bot
	botPost.classList.add( "botPost" );
	
	// get the chatWindow and add the Post to it
	document.getElementById( "chatWindow" ).appendChild( botPost );
}

function show_image(src, width, height, alt) {
    let img = document.createElement("img");
    img.src = "./img/tenor.gif";
    img.width = "48";
    img.height = "31";
    img.alt = "Writing";
    document.getElementById( "chatWindow" ).appendChild( img );
    
}
