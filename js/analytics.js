// MoMo website analytics (Google Analytics 4).
// Measurement ID G-FGCY3ZM4ZQ (set in the Google tag in each page's <head>).
// Visits after ?test=1 are never tracked.
// No names, emails, addresses or form text are ever sent — only anonymous clicks and page views.
(function(){
  // The Google tag itself is in the <head> of every page (Google's own snippet, ID G-FGCY3ZM4ZQ).
  // This file only adds the shop events below. Test visits (?test=1) are switched off there and skipped here.
  var M=window.MOMO||{};
  if(typeof window.gtag!=='function'||M.testMode)return;
  var gtag=window.gtag;
  var NAMES={cooking:'Cooking Box',toolkit:'Starter Tool Kit'};

  function send(name,params){gtag('event',name,params||{})}
  function items(cart){
    var list=[],value=0;
    Object.keys(cart||{}).forEach(function(k){
      var p=M.products&&M.products[k];if(!p||!cart[k])return;
      list.push({item_id:k,item_name:NAMES[k]||k,price:p.price,quantity:cart[k]});
      value+=p.price*cart[k];
    });
    return {currency:'USD',value:Math.round(value*100)/100,items:list};
  }

  var page=document.body.dataset.page;
  if(page==='shop')send('view_item_list',items({cooking:1,toolkit:1}));
  if(page==='cart'&&M.cart)send('view_cart',items(M.cart()));
  // Stripe sends customers to thank-you.html?session_id=... after paying. Count each order once.
  if(page==='thanks'){
    var sid=new URLSearchParams(location.search).get('session_id');
    var key='momo-ga-'+sid,seen=false;
    try{seen=!!localStorage.getItem(key)}catch(e){}
    if(sid&&!seen){
      var data=items(M.lastCart||{});data.transaction_id=sid;
      send('purchase',data);
      try{localStorage.setItem(key,'1')}catch(e){}
    }
  }

  document.addEventListener('click',function(e){
    var el=e.target.closest('[data-add],[data-remove],[data-notify],[data-lang],#checkout,summary,a[href^="mailto:"]');
    if(!el)return;
    if(el.dataset.add){var c={};c[el.dataset.add]=1;send('add_to_cart',items(c))}
    else if(el.dataset.remove){var r={};r[el.dataset.remove]=1;send('remove_from_cart',items(r))}
    else if(el.dataset.notify)send('notify_me',{box:el.dataset.notify.replace(/^box\.|\.name$/g,'')});
    else if(el.dataset.lang){gtag('set','user_properties',{site_language:el.dataset.lang});send('language_change',{language:el.dataset.lang})}
    else if(el.id==='checkout'){var d=items(M.cart?M.cart():{});d.checkout_ready=M.checkoutReady?'yes':'not_yet';send('begin_checkout',d)}
    else if(el.tagName==='SUMMARY'){if(!el.parentNode.open)send('faq_open',{question:el.dataset.i18n||''})}
    else send('email_click',{page:page});
  });
  document.addEventListener('submit',function(e){
    if(e.target.id==='mailForm')send('sign_up',{method:'mailing_list'});
    if(e.target.id==='contactForm')send('generate_lead',{method:'contact_form'});
  });
})();
