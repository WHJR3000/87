
var canvas= new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){

block_image_object= Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
	top:block_y,
	left:block_x

});
canvas.add(block_image_object);




	});













}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '83') 
	{
		
		new_image('Starlight.jpg');
		console.log("s")
	}
	if(keyPressed == '67')
	{
		block_x = 200;
		new_image('celestia.png');
		console.log("c");
	}
	
	if(keyPressed == '76')
	{
		block_x =350;
	new_image('Luna.jpg');
		console.log("l");
	}
	if(keyPressed == '84')
	{
		block_x = 600;
		new_image('Twilight.jpg');
		console.log("t")
	
	}
	
	
	
}

