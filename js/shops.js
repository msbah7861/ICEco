/* shops page: add new shops to the SHOPS list */
var SHOPS=[
 {name:'Iceco, Venniyoor',addr:'Venniyoor PO, Malappuram, PIN 676508',tel:'+919744432748',map:'https://www.google.com/maps/search/?api=1&query=Venniyoor+PO+Malappuram+676508'},
 {name:'Iceco, Edarikkode',tag:'Franchise',addr:'Edarikkode, Malappuram',map:'https://www.google.com/maps/search/?api=1&query=Iceco+Edarikkode+Malappuram'}
];
function drawShops(){
  document.getElementById('shoplist').innerHTML=SHOPS.map(function(s){
    return '<div class="shop"><h3>'+esc(s.name)+(s.tag?'<span class="tag">'+esc(s.tag)+'</span>':'')+'</h3><p>'+esc(s.addr)+'</p><div class="reach"><a class="btn sm" href="'+s.map+'" target="_blank" rel="noopener">Get directions</a>'+(s.tel?'<a class="btn sm line" href="tel:'+s.tel+'">Call</a>':'')+'</div></div>'}).join('');
}
drawShops();
