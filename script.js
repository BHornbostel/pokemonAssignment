$(document).ready(function(){
for(var i=1; i<152;i++){
    var name = "<img src='http://pokeapi.co/media/img/"+i+".png'>";
    $('#pokemon').append(name);
}
});