var canvas= new fabric.Canvas("myCanvas");

var player_object, block_object; 

var player_x = 10;
var player_y = 10;

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object= Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
    top:player_y,
    left:player_x

    })

    canvas.add(player_object);

    });
}

var block_width = 30;
var block_height = 30;

function block_update(blocks){
    fabric.Image.fromURL(blocks, function(Img){
    block_object= Img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y,
    left:player_x

    })

    canvas.add(block_object);

    });
}