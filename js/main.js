// MoMo site scripts: cart, menu, pop-ups.
(function(){
  var PRODUCTS={cooking:{name:'Cooking Box',sub:'A delicious way to learn!',price:29,img:'images/cooking.jpg'}};
  var cart={};
  try{var s=localStorage.getItem('momo-cart');if(s)cart=JSON.parse(s)||{}}catch(e){}
  function save(){try{localStorage.setItem('momo-cart',JSON.stringify(cart))}catch(e){}}
  function count(){return Object.keys(cart).reduce(function(a,k){return a+cart[k]},0)}
  function money(n){return '$'+n.toFixed(2)}
  var $=function(s){return document.querySelector(s)};
  var toastT;
  function toast(t){var e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){e.classList.remove('show')},2200)}

  function renderCart(){
    $('#badge').textContent=count();
    $('#badge').style.display=count()?'grid':'none';
    if(!$('#cartBody'))return;
    var ids=Object.keys(cart).filter(function(k){return PRODUCTS[k]&&cart[k]>0});
    var el=$('#cartBody');
    if(!ids.length){el.innerHTML='<div class="empty"><h3>Your cart is empty</h3><p>Pick a box to get the fun started.</p><button class="btn" data-go="shop">Shop our boxes</button></div>';return}
    var sub=0,rows='';
    ids.forEach(function(k){var p=PRODUCTS[k],q=cart[k];sub+=p.price*q;
      rows+='<div class="cart-row"><div class="cart-item"><img src="'+p.img+'" alt=""><div><h3>'+p.name+'</h3><small>'+p.sub+'</small><small>Ages 3–5 · In stock</small><button class="link-btn" data-remove="'+k+'">Remove</button></div></div><div class="c-price">'+money(p.price)+'</div><div class="qty"><button data-dec="'+k+'" aria-label="Decrease">−</button><span>'+q+'</span><button data-inc="'+k+'" aria-label="Increase">+</button></div><div><b>'+money(p.price*q)+'</b></div></div>'});
    el.innerHTML='<div class="cart-table"><div class="cart-head"><span>Product</span><span class="c-price">Price</span><span>Quantity</span><span>Total</span></div>'+rows+'</div>'+
      '<div class="cart-lower"><div class="summary"><h3>Add a note (optional)</h3><textarea id="orderNote" placeholder="e.g. Gift message, special requests…" aria-label="Order note"></textarea></div>'+
      '<div class="summary"><h3>Order summary</h3><div class="sum-row"><span>Subtotal ('+count()+' item'+(count()>1?'s':'')+')</span><span>'+money(sub)+'</span></div><div class="sum-row"><span>Shipping</span><span>FREE</span></div><div class="sum-row total"><span>Total</span><span>'+money(sub)+'</span></div><button class="btn" id="checkout">🔒 Proceed to checkout</button></div></div>';
  }

  var URL={home:'index.html',shop:'shop.html',about:'about.html',faq:'faq.html',contact:'contact.html',cart:'cart.html'};
  var current=document.body.dataset.page;
  document.querySelectorAll('.nav a.link').forEach(function(a){if(a.dataset.go===current)a.setAttribute('aria-current','page')});

  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-go],[data-add],[data-notify],[data-inc],[data-dec],[data-remove],#checkout,#mClose');
    if(!t)return;
    if(t.dataset.go){e.preventDefault();location.href=URL[t.dataset.go]}
    else if(t.dataset.add){cart[t.dataset.add]=(cart[t.dataset.add]||0)+1;save();renderCart();toast('Added to cart ♡')}
    else if(t.dataset.notify){modal(t.dataset.notify+' is coming soon','Join our mailing list at the bottom of the page and we\u2019ll tell you the moment it\u2019s ready.')}
    else if(t.dataset.inc){cart[t.dataset.inc]++;save();renderCart()}
    else if(t.dataset.dec){cart[t.dataset.dec]=Math.max(0,cart[t.dataset.dec]-1);if(!cart[t.dataset.dec])delete cart[t.dataset.dec];save();renderCart()}
    else if(t.dataset.remove){delete cart[t.dataset.remove];save();renderCart()}
    else if(t.id==='checkout'){modal('Checkout is almost ready','Online payments aren\u2019t connected to this preview yet. Once a store is linked, this button will take customers to secure checkout.')}
    else if(t.id==='mClose'){$('#modal').classList.remove('open')}
  });
  function modal(h,p){$('#mTitle').textContent=h;$('#mText').textContent=p;$('#modal').classList.add('open');$('#mClose').focus()}
  $('#modal').addEventListener('click',function(e){if(e.target.id==='modal')this.classList.remove('open')});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')$('#modal').classList.remove('open')});
  $('#menuBtn').addEventListener('click',function(){var o=$('#nav').classList.toggle('open');this.setAttribute('aria-expanded',o)});
  if($('#mailForm'))$('#mailForm').addEventListener('submit',function(e){e.preventDefault();this.reset();toast('Thank you! You\u2019re on the list ♡')});
  if($('#contactForm'))$('#contactForm').addEventListener('submit',function(e){e.preventDefault();this.reset();toast('Message ready to send once email is connected')});
  $('#yr').textContent=new Date().getFullYear();
  renderCart();
})();
