/* shared helpers + light drag effect */
function esc(s){return s.replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
/* light drag: popsicles can be pulled a little and spring back */
function dragify(sel){
  document.querySelectorAll(sel).forEach(function(el){
    var sx=0,sy=0,on=false,t;
    function lim(v){return Math.max(-90,Math.min(90,v))}
    el.style.touchAction='pan-y';
    el.addEventListener('pointerdown',function(e){
      on=true;sx=e.clientX;sy=e.clientY;clearTimeout(t);
      el.setPointerCapture(e.pointerId);
      el.style.animation='none';el.style.transition='none';el.style.zIndex='2';
    });
    el.addEventListener('pointermove',function(e){
      if(!on)return;
      var dx=lim(e.clientX-sx),dy=lim(e.clientY-sy);
      el.style.translate=dx+'px '+dy+'px';
      el.style.rotate=(dx/6)+'deg';
    });
    function end(){
      if(!on)return;on=false;
      el.style.transition='translate .6s cubic-bezier(.3,1.7,.5,1), rotate .6s cubic-bezier(.3,1.7,.5,1)';
      el.style.translate='0 0';el.style.rotate='0deg';
      t=setTimeout(function(){el.style.animation='';el.style.transition='';el.style.zIndex='';el.style.translate='';el.style.rotate=''},650);
    }
    el.addEventListener('pointerup',end);
    el.addEventListener('pointercancel',end);
  });
}
dragify('.pops svg');dragify('.art svg');
