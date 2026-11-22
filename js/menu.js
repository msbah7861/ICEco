/* menu page: flavour list and filter */
var COLORS=['var(--pink)','var(--pink-soft)','var(--purple)','var(--lilac)','var(--purple-deep)'];
var MENU=[
 {id:'fruit',name:'Fruit popsicles',sub:'Icy, juicy and light.',sym:'pop',items:[
  ['Mango','Ripe mango, sweet and bright.','mango'],['Orange','Tangy orange, just right on a hot day.','orange'],
  ['Lemon','Sharp, cool and refreshing.','lemon'],['Pineapple','Sweet with a little tang.','pineapple'],
  ['Watermelon','Light, juicy and cold.','watermelon'],['Black grape','Deep, fruity and sweet.','grape'],['Jackfruit','Rich, fragrant and a local favourite.','jackfruit']]},
 {id:'creamy',name:'Creamy popsicles',sub:'Smooth and milky.',sym:'pop',items:[
  ['Milk','Plain, creamy and simple.','milk'],['Chocolate','Rich cocoa on a stick.','chocolate'],
  ['Tender coconut','Soft, sweet and cooling.','coconut'],['Badam','Almond and milk, smooth and mild.','badam'],['Strawberry cream','Fruity and creamy in one bite.','strawcream']]},
 {id:'cream',name:'Ice cream',sub:'Scoops, cups and tubs.',sym:'cone',items:[
  ['Vanilla','The classic, soft and creamy.'],['Strawberry','Fruity, pink and sweet.'],
  ['Butterscotch','Caramel notes with a crunch.'],['Chocolate','Deep, rich and smooth.'],['Mango','Ripe mango in every scoop.']]},
 {id:'bulk',name:'Boxes & bulk',sub:'For parties, shops and events.',sym:'pop',items:[
  ['Party box','A mixed box of popsicles to share.','watermelon'],['Shop supply','Regular supply for your shop or cafe.','mango'],['Event orders','Large orders for weddings and functions.','orange']]}
];
var IMG={
 "watermelon": "assets/popsicles/watermelon.webp",
 "mango": "assets/popsicles/mango.webp",
 "orange": "assets/popsicles/orange.webp",
 "lemon": "assets/popsicles/lemon.webp",
 "pineapple": "assets/popsicles/pineapple.webp",
 "jackfruit": "assets/popsicles/jackfruit.webp",
 "grape": "assets/popsicles/grape.webp",
 "milk": "assets/popsicles/milk.webp",
 "chocolate": "assets/popsicles/chocolate.webp",
 "coconut": "assets/popsicles/coconut.webp",
 "badam": "assets/popsicles/badam.webp",
 "strawcream": "assets/popsicles/strawcream.webp"
};
var active='all';
function drawMenu(){
  var chips=[{id:'all',name:'All'}].concat(MENU.map(function(c){return{id:c.id,name:c.name}}));
  document.getElementById('chips').innerHTML=chips.map(function(c){
    return '<button class="chip" data-c="'+c.id+'" aria-pressed="'+(active===c.id)+'">'+esc(c.name)+'</button>'}).join('');
  var n=0;
  document.getElementById('list').innerHTML=MENU.filter(function(c){return active==='all'||active===c.id}).map(function(c){
    return '<div class="cat"><h2>'+esc(c.name)+'</h2><p class="sub">'+esc(c.sub)+'</p><div class="items">'+
      c.items.map(function(it){
        var col=COLORS[n++%COLORS.length];
        var vb=c.sym==='cone'?'0 0 60 130':'0 0 60 140';var pic=it[2]?'<img src="'+IMG[it[2]]+'" alt="">':'<svg viewBox="'+vb+'" style="color:'+col+'" aria-hidden="true"><use href="#'+c.sym+'"/></svg>';
        return '<div class="item '+(c.sym==='cone'?'cone':'')+'">'+pic+'<div><h3>'+esc(it[0])+'</h3><p>'+esc(it[1])+'</p></div></div>'}).join('')+
      '</div></div>'}).join('');
}
document.getElementById('chips').addEventListener('click',function(e){
  var b=e.target.closest('.chip'); if(!b)return; active=b.dataset.c; drawMenu();
});
drawMenu();
