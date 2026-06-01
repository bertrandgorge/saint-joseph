(function(){
  var sec=document.getElementById('budget'); if(!sec) return;
  var arcs=sec.querySelectorAll('#donut .arc'), rows=sec.querySelectorAll('.lg-row');
  function hi(i,on){ arcs.forEach(function(a){var k=a.dataset.i===String(i);a.classList.toggle('pop',on&&k);a.classList.toggle('dim',on&&!k);});
    rows.forEach(function(r){r.classList.toggle('hl',on&&r.dataset.i===String(i));}); }
  arcs.forEach(function(a){a.addEventListener('mouseenter',function(){hi(a.dataset.i,true);});a.addEventListener('mouseleave',function(){hi(a.dataset.i,false);});});
  rows.forEach(function(r){r.addEventListener('mouseenter',function(){hi(r.dataset.i,true);});r.addEventListener('mouseleave',function(){hi(r.dataset.i,false);});});
  // draw-in animation
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
    arcs.forEach(function(a,k){a.style.opacity=0;setTimeout(function(){a.style.transition='opacity .5s';a.style.opacity=1;},120*k);});
    io.disconnect();});},{threshold:.4});
  io.observe(sec);
})();
