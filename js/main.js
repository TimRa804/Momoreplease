// MoMo site scripts: cart, menu, pop-ups. Text comes from js/i18n.js.
(function(){
  var t=window.MOMO_I18N.t;
  var PRODUCTS={cooking:{name:'box.cooking.name',sub:'box.cooking.sub',price:29,img:'images/cooking.jpg'}};
  var cart={};
  try{var s=localStorage.getItem('momo-cart');if(s)cart=JSON.parse(s)||{}}catch(e){}
  function save(){try{localStorage.setItem('momo-cart',JSON.stringify(cart))}catch(e){}}
  function count(){return Object.keys(cart).reduce(function(a,k){return a+cart[k]},0)}
  function money(n){return '$'+n.toFixed(2)}
  var $=function(s){return document.querySelector(s)};
  var toastT;
  function toast(msg){var e=$("#toast");e.textContent=msg;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){e.classList.remove('show')},2200)}

  function renderCart(){
    $('#badge').textContent=count();
    $('#badge').style.display=count()?'grid':'none';
    if(!$('#cartBody'))return;
    var ids=Object.keys(cart).filter(function(k){return PRODUCTS[k]&&cart[k]>0});
    var el=$('#cartBody');
    var note=$('#orderNote')?$('#orderNote').value:'';
    if(!ids.length){el.innerHTML='<div class="empty"><h3>'+t('cart.emptyTitle')+'</h3><p>'+t('cart.emptyText')+'</p><button class="btn" data-go="shop">'+t('cart.emptyBtn')+'</button></div>';return}
    var sub=0,rows='';
    ids.forEach(function(k){var p=PRODUCTS[k],q=cart[k];sub+=p.price*q;
      rows+='<div class="cart-row"><div class="cart-item"><img src="'+p.img+'" alt=""><div><h3>'+t(p.name)+'</h3><small>'+t(p.sub)+'</small><small>'+t('meta.ages')+' · '+t('meta.instock')+'</small><button class="link-btn" data-remove="'+k+'">'+t('cart.remove')+'</button></div></div><div class="c-price">'+money(p.price)+'</div><div class="qty"><button data-dec="'+k+'" aria-label="'+t('cart.dec')+'">−</button><span>'+q+'</span><button data-inc="'+k+'" aria-label="'+t('cart.inc')+'">+</button></div><div><b>'+money(p.price*q)+'</b></div></div>'});
    el.innerHTML='<div class="cart-table"><div class="cart-head"><span>'+t('cart.product')+'</span><span class="c-price">'+t('cart.price')+'</span><span>'+t('cart.qty')+'</span><span>'+t('cart.total')+'</span></div>'+rows+'</div>'+
      '<div class="cart-lower"><div class="summary"><h3>'+t('cart.noteTitle')+'</h3><textarea id="orderNote" placeholder="'+t('cart.notePlaceholder')+'" aria-label="'+t('cart.noteLabel')+'"></textarea></div>'+
      '<div class="summary"><h3>'+t('cart.summary')+'</h3><div class="sum-row"><span>'+t('cart.subtotal')+' ('+t('cart.items',{n:count()})+')</span><span>'+money(sub)+'</span></div><div class="sum-row"><span>'+t('cart.shipping')+'</span><span>'+t('cart.free')+'</span></div><div class="sum-row total"><span>'+t('cart.total')+'</span><span>'+money(sub)+'</span></div><button class="btn" id="checkout">'+t('cart.checkout')+'</button></div></div>';
    $('#orderNote').value=note;
  }

  var URL={home:'index.html',shop:'shop.html',about:'about.html',faq:'faq.html',contact:'contact.html',cart:'cart.html'};
  var current=document.body.dataset.page;
  document.querySelectorAll('.nav a.link').forEach(function(a){if(a.dataset.go===current)a.setAttribute('aria-current','page')});

  document.addEventListener('click',function(e){
    var t2=e.target.closest('[data-go],[data-add],[data-notify],[data-inc],[data-dec],[data-remove],#checkout,#mClose');
    if(!t2)return;
    if(t2.dataset.go){e.preventDefault();location.href=URL[t2.dataset.go]}
    else if(t2.dataset.add){cart[t2.dataset.add]=(cart[t2.dataset.add]||0)+1;save();renderCart();toast(t('toast.added'))}
    else if(t2.dataset.notify){modal(t('modal.soonTitle',{name:t(t2.dataset.notify)}),t('modal.soonText'))}
    else if(t2.dataset.inc){cart[t2.dataset.inc]++;save();renderCart()}
    else if(t2.dataset.dec){cart[t2.dataset.dec]=Math.max(0,cart[t2.dataset.dec]-1);if(!cart[t2.dataset.dec])delete cart[t2.dataset.dec];save();renderCart()}
    else if(t2.dataset.remove){delete cart[t2.dataset.remove];save();renderCart()}
    else if(t2.id==='checkout'){modal(t('modal.checkoutTitle'),t('modal.checkoutText'))}
    else if(t2.id==='mClose'){$('#modal').classList.remove('open')}
  });
  function modal(h,p){$('#mTitle').textContent=h;$('#mText').textContent=p;$('#modal').classList.add('open');$('#mClose').focus()}
  $('#modal').addEventListener('click',function(e){if(e.target.id==='modal')this.classList.remove('open')});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')$('#modal').classList.remove('open')});
  $('#menuBtn').addEventListener('click',function(){var o=$('#nav').classList.toggle('open');this.setAttribute('aria-expanded',o)});
  if($('#mailForm'))$('#mailForm').addEventListener('submit',function(e){e.preventDefault();this.reset();toast(t('toast.subscribed'))});
  if($('#contactForm'))$('#contactForm').addEventListener('submit',function(e){e.preventDefault();this.reset();toast(t('toast.contact'))});
  document.addEventListener('momo:lang',renderCart);
  $('#yr').textContent=new Date().getFullYear();
  renderCart();
})();
