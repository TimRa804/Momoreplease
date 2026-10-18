// MoMo translations: English (EN), Russian (RU) and Uzbek (UZ, Latin script).
// English text lives in the HTML pages. Russian and Uzbek live here.
// Each piece of text on a page has a data-i18n="key"; find the same key below to change it.
// The "en" list only holds text that is built by js/main.js (cart, pop-ups, messages).
(function(){
  var T={
    en:{
      'box.toolkit.desc':'No scissors or glue at home? Add our kit to your box and you\u2019re ready to start.',
      'box.cooking.name':"Cooking Activity Box",'box.cooking.sub':"30 activities + all materials",
      'box.toolkit.name':'Starter Tool Kit','box.toolkit.sub':"Scissors • Glue • Marker • Colored pencils",
      'meta.ages':'Ages 2–5','meta.instock':'In stock',
      'toast.added':'Added to cart ♡','toast.subscribed':'Thank you! You’re on the list ♡','toast.contact':'Opening your email app…',
      'modal.soonTitle':'{name} is coming soon','modal.soonText':'Join our mailing list at the bottom of the page and we’ll tell you the moment it’s ready.',
      'modal.checkoutTitle':'Checkout is almost ready','modal.checkoutText':'Online payments aren’t connected to this preview yet. Once a store is linked, this button will take customers to secure checkout.',
      'cart.emptyTitle':'Your cart is empty','cart.emptyText':'Pick a box to get the fun started.','cart.emptyBtn':'Shop our boxes',
      'cart.product':'Product','cart.price':'Price','cart.qty':'Quantity','cart.total':'Total','cart.remove':'Remove','cart.dec':'Decrease','cart.inc':'Increase',
      'cart.noteTitle':'Add a note (optional)','cart.notePlaceholder':'e.g. Gift message, special requests…','cart.noteLabel':'Order note',
      'cart.summary':'Order summary','cart.subtotal':'Subtotal','cart.items':['{n} item','{n} items'],'cart.shipping':'Shipping','cart.free':'FREE','cart.checkout':'🔒 Proceed to checkout',
      'cart.stripeNote':'You’ll confirm quantities and can add the Starter Tool Kit on Stripe’s secure payment page.'
    },

    ru:{
      'box.toolkit.desc':'Нет дома ножниц или клея? Добавьте наш набор к коробке — и можно начинать.',
      'title.home':'MoMo – More, please! Развивающие наборы для малышей','title.shop':'Магазин – MoMo','title.about':'О нас – MoMo','title.faq':'Вопросы – MoMo','title.contact':'Контакты – MoMo','title.cart':'Корзина – MoMo',
      'top.ship':'🚚 Бесплатная доставка всех заказов по США','top.tag':'Играем · Учимся · Растём',
      'nav.home':'Главная','nav.shop':'Магазин','nav.about':'О нас','nav.faq':'Вопросы','nav.contact':'Контакты','nav.menu':'Меню','nav.cart':'Корзина',
      'mail.placeholder':'Подпишитесь на рассылку','mail.label':'Адрес эл. почты','mail.join':'Подписаться',
      'legal.rights':'Все права защищены.','legal.motto':'Маленькие занятия. Большое будущее. ♡','modal.close':'Понятно',

      'hero.title':'Полезные занятия для маленьких исследователей',
      'hero.lead':'Тематические наборы с поделками, заданиями для печати и игровым обучением для детей 2–5 лет.',
      'hero.cta':'Выбрать набор →','hero.stamp':'УЧИМСЯ<br>ИГРАЯ<br>В КОРОБКЕ',
      'pillar.skills':'Развивает ранние навыки','pillar.hands':'Своими руками и без экранов','pillar.themed':'Продуманные темы','pillar.home':'Для дома и детского сада',
      'boxes.title':'Наши наборы','boxes.lead':'Сезонные и повседневные темы, которые пробуждают любопытство, творчество и уверенность.',
      'box.cooking.name':"Набор занятий «Кулинария»",'box.cooking.desc':"Вкусный способ учиться! 30 поделок и занятий своими руками — все материалы уже в коробке.",'box.cooking.sub':"30 занятий + все материалы",
      
      
      'box.toolkit.name':'Starter Tool Kit','box.toolkit.sub':"Ножницы • Клей • Маркер • Цветные карандаши",
      'meta.ages':'2–5 лет','meta.instock':'В наличии','meta.soon':'Скоро',
      'btn.addArrow':'В корзину →','btn.add':'В корзину','btn.stayTuned':'Следите за новостями ♡','btn.notify':'Сообщить мне',
      'banner':"Не очередная игрушка. Не очередная тетрадь. Коробка впечатлений.",'follow.title':'Следите за нами','follow.sub':'Идеи · Занятия · Счастливые дети',

      'shop.lead':"Один набор, одна тема, много маленьких побед. Каждый набор стоит $44.99, доставка по США бесплатная.",

      'about.title':'О MoMo',
      'about.p1':'«More, please!» — «Ещё, пожалуйста!» — так говорит малыш, когда находит то, что ему по-настоящему нравится. MoMo создаёт развивающие наборы, которые вызывают именно такую реакцию: тематические, практические и созданные для детей от 2 до 5 лет.',
      'about.p2':'В каждом наборе — поделка, задания для печати и игровое обучение вокруг одной темы. Дети тренируют ранние навыки — сопоставление, сортировку, счёт и мелкую моторику — без всяких экранов.',
      'about.p3':'Маленькие занятия. Большое будущее.',
      'value.hands':'Своими руками','value.handsText':'Вырезаем, рисуем, сортируем и сопоставляем. Настоящие материалы для маленьких ручек.',
      'value.screen':'Без экранов','value.screenText':'Спокойная, сосредоточенная игра, которая развивает внимание и уверенность.',
      'value.ready':'Готово к игре','value.readyText':'Всё разложено по темам — для дома или детского сада.',

      'peek.title':"Заглянем в набор занятий «Кулинария»",'peek.lead':"Настоящие фото того, что приходит к вам домой: всё упаковано и готово к игре.",'peek.i1t':"Тематические задания",'peek.i1d':"«Найди лишнее», задания на сопоставление и логику с настоящими картинками еды.",'peek.i2t':"Пронумерованные наборы для поделок",'peek.i2d':"Каждая поделка — в отдельном подписанном пакетике со всем необходимым: синельная проволока, помпоны, пряжа, бумажные тарелки и многое другое.",'peek.i3t':"Пошаговые листы для поделок",'peek.i3d':"Простые инструкции в картинках, понятные малышам.",'peek.i4t':"Открыл — и играй",'peek.i4d':"Всё готово к занятиям. Понадобятся только ножницы, клей и карандаши — или наш Starter Tool Kit.",'peek.c1':"Каждая поделка — в своём подписанном пакетике",'peek.c2':"Клубничка из синельной проволоки — сделано маленькими ручками",'peek.c3':"Гордится своими поделками!",
      'banner.sub':"Им интересно. Они учатся. И ничего не пылится годами.",'peek.c4':"Пошаговые картинки для каждой поделки — например, грибная полянка",'peek.c5':"Листы с поделками и заданиями развивают внимание и наблюдательность",
      'faq.title':"Часто задаваемые вопросы",
      'faq.q1':"Что такое Momo Activity Box?",
      'faq.a1':"<p>Momo Activity Box — это коробка впечатлений, которая приносит творчество, обучение и веселье прямо к вам домой.</p><p>В каждой коробке — готовые задания, поделки и все материалы, нужные для занятий. Просто откройте коробку — и пусть начнётся веселье!</p>",
      'faq.q2':"Для какого возраста подходят наборы?",
      'faq.a2':"<p>Momo Activity Box создан в первую очередь для детей 2–5 лет — под руководством и при участии родителей.</p><p>Дети постарше тоже будут рады Momo — особенно если они любят поделки, творчество и занятия своими руками!</p>",
      'faq.q3':"Нужно ли докупать что-то ещё?",
      'faq.a3':"<p>Нет! Всё необходимое для занятий уже есть в коробке.</p><p>✂️ У вас уже есть ножницы, клей и карандаши? Отлично — используйте свои!</p><p>Если нет, добавьте к заказу наш Starter Tool Kit за $8.99 — в нём есть все основные инструменты.</p>",
      'faq.q4':"Нужен ли ребёнку присмотр взрослых?",
      'faq.a4':"<p>Да. Momo Activity Box рассчитан на занятия вместе с родителями, особенно когда речь о малышах. В некоторых занятиях есть мелкие детали или инструменты, с которыми понадобится помощь взрослого.</p>",
      'faq.q5':"Что делать, если чего-то не хватает или что-то повреждено?",
      'faq.a5':"<p>Мы поможем! Напишите нам на <a href=\"mailto:momoboxusa@gmail.com\">momoboxusa@gmail.com</a> в течение 3 дней после получения коробки и расскажите, что случилось. Мы сделаем всё возможное, чтобы всё исправить.</p>",
      'faq.q6':"Можно ли вернуть Momo Activity Box?",
      'faq.a6':"<p>В наших коробках — материалы, специально подобранные для каждого набора, поэтому все продажи Momo Activity Box окончательны, и возврат не принимается.</p><p>Если коробка пришла повреждённой или в ней чего-то не хватает, напишите нам на <a href=\"mailto:momoboxusa@gmail.com\">momoboxusa@gmail.com</a> в течение 3 дней после доставки — мы поможем.</p>",
      'faq.q7':"Momo Activity Box — это развивающие занятия?",
      'faq.a7':"<p>Конечно! Momo превращает учёбу в игру. Занятия развивают творчество, мелкую моторику, умение решать задачи и следовать инструкциям, дают первые знания и учат думать самостоятельно — и всё это весело.</p>",
      'faq.q8':"Как часто я буду получать коробку?",
      'faq.a8':"<p>Каждая коробка — это разовая покупка.</p>",
      'faq.q9':"Можно ли купить коробку в подарок?",
      'faq.a9':"<p>Конечно! Momo Activity Box — весёлый подарок на день рождения, праздник или просто так, когда хочется подарить ребёнку интересное занятие.</p>",

      'contact.lead':'Есть вопросы, идеи или тема, которую вы хотели бы увидеть? Напишите нам.',
      'contact.or':'Или напишите нам на почту:','contact.name':'Ваше имя','contact.email':'Эл. почта','contact.message':'Сообщение','contact.send':'Отправить',

      'cart.title':'Ваша корзина','cart.lead':'Вы на шаг ближе к полезной игре! ♡','cart.continue':'Продолжить покупки →',
      'toast.added':'Добавлено в корзину ♡','toast.subscribed':'Спасибо! Вы подписаны ♡','toast.contact':'Открываем вашу почтовую программу…',
      'modal.soonTitle':'{name}: скоро в продаже','modal.soonText':'Подпишитесь на рассылку внизу страницы — мы сообщим, как только набор будет готов.',
      'modal.checkoutTitle':'Оформление заказа почти готово','modal.checkoutText':'Онлайн-оплата пока не подключена. Как только магазин будет подключён, эта кнопка откроет безопасную страницу оплаты.',
      'cart.emptyTitle':'Ваша корзина пуста','cart.emptyText':'Выберите набор — и веселье начнётся.','cart.emptyBtn':'Выбрать набор',
      'cart.product':'Товар','cart.price':'Цена','cart.qty':'Количество','cart.total':'Итого','cart.remove':'Удалить','cart.dec':'Меньше','cart.inc':'Больше',
      'cart.noteTitle':'Комментарий (необязательно)','cart.notePlaceholder':'Например, поздравление или особые пожелания…','cart.noteLabel':'Комментарий к заказу',
      'cart.summary':'Ваш заказ','cart.subtotal':'Подытог','cart.items':['{n} товар','{n} товара','{n} товаров'],'cart.shipping':'Доставка','cart.free':'БЕСПЛАТНО','cart.checkout':'🔒 Оформить заказ',
      'title.thanks':'Спасибо – MoMo','thanks.title':'Спасибо за заказ!','thanks.text1':'Оплата прошла успешно. Stripe пришлёт вам чек на почту в течение нескольких минут.','thanks.text2':'Мы уже собираем вашу коробку MoMo. Есть вопросы по заказу? Пишите нам в любое время:','thanks.back':'На главную',
      'cart.stripeNote':'Количество можно уточнить, а Starter Tool Kit — добавить на защищённой странице оплаты Stripe.'
    },

    uz:{
      'box.toolkit.desc':'Uyda qaychi yoki yelim yo‘qmi? To‘plamimizni qutiga qo‘shing — va boshlashga tayyorsiz.',
      'title.home':'MoMo – More, please! Kichkintoylar uchun mashg‘ulot qutilari','title.shop':'Do‘kon – MoMo','title.about':'Biz haqimizda – MoMo','title.faq':'Savollar – MoMo','title.contact':'Aloqa – MoMo','title.cart':'Savat – MoMo',
      'top.ship':'🚚 AQSh bo‘ylab barcha buyurtmalar bepul yetkaziladi','top.tag':'O‘yna · O‘rgan · O‘s',
      'nav.home':'Bosh sahifa','nav.shop':'Do‘kon','nav.about':'Biz haqimizda','nav.faq':'Savollar','nav.contact':'Aloqa','nav.menu':'Menyu','nav.cart':'Savat',
      'mail.placeholder':'Yangiliklarga obuna bo‘ling','mail.label':'Elektron pochta manzili','mail.join':'Obuna bo‘lish',
      'legal.rights':'Barcha huquqlar himoyalangan.','legal.motto':'Kichik mashg‘ulotlar. Katta kelajak. ♡','modal.close':'Tushunarli',

      'hero.title':'Kichkintoylar uchun foydali mashg‘ulotlar',
      'hero.lead':'2–5 yoshli bolalar uchun qo‘l mehnati, chop etiladigan topshiriqlar va o‘yin orqali o‘rganishdan iborat mavzuli qutilar.',
      'hero.cta':'Qutilarni ko‘rish →','hero.stamp':'QUTIDAGI<br>QIZIQARLI<br>TA’LIM',
      'pillar.skills':'Ilk ko‘nikmalarni rivojlantiradi','pillar.hands':'Qo‘l mehnati, ekransiz','pillar.themed':'Puxta o‘ylangan mavzular','pillar.home':'Uy va bog‘cha uchun',
      'boxes.title':'Bizning qutilarimiz','boxes.lead':'Qiziquvchanlik, ijodkorlik va o‘ziga ishonchni uyg‘otadigan mavsumiy va kundalik mavzular.',
      'box.cooking.name':"«Oshpazlik» mashg‘ulotlar qutisi",'box.cooking.desc':"O‘rganishning mazali usuli! 30 ta qo‘l mehnati va mashg‘ulot — barcha materiallar qutining ichida.",'box.cooking.sub':"30 ta mashg‘ulot + barcha materiallar",
      
      
      'box.toolkit.name':'Starter Tool Kit','box.toolkit.sub':"Qaychi • Yelim • Marker • Rangli qalamlar",
      'meta.ages':'2–5 yosh','meta.instock':'Sotuvda bor','meta.soon':'Tez orada',
      'btn.addArrow':'Savatga →','btn.add':'Savatga qo‘shish','btn.stayTuned':'Kuzatib boring ♡','btn.notify':'Xabar bering',
      'banner':"Yana bir o‘yinchoq emas. Yana bir daftar emas. Bu — tajribalar qutisi.",'follow.title':'Bizni kuzatib boring','follow.sub':'G‘oyalar · Mashg‘ulotlar · Baxtli bolalar',

      'shop.lead':"Bitta quti, bitta mavzu, ko‘plab kichik g‘alabalar. Har bir quti $44.99, AQSh bo‘ylab yetkazib berish bepul.",

      'about.title':'MoMo haqida',
      'about.p1':'«More, please!» — «Yana, iltimos!» — kichkintoy o‘ziga juda yoqqan narsani topganda shunday deydi. MoMo aynan shunday javob uyg‘otadigan mashg‘ulot qutilarini yaratadi: mavzuli, amaliy va 2 yoshdan 5 yoshgacha bo‘lgan bolalar uchun mo‘ljallangan.',
      'about.p2':'Har bir qutida bitta mavzu atrofida qo‘l mehnati, chop etiladigan topshiriqlar va o‘yin orqali o‘rganish jamlangan. Bolalar juftlash, saralash, sanash va mayda motorika kabi ilk ko‘nikmalarni ekransiz mashq qilishadi.',
      'about.p3':'Kichik mashg‘ulotlar. Katta kelajak.',
      'value.hands':'Qo‘l mehnati','value.handsText':'Qirqish, bo‘yash, saralash va juftlash. Kichkina qo‘llar uchun haqiqiy materiallar.',
      'value.screen':'Ekransiz','value.screenText':'Diqqat va o‘ziga ishonchni rivojlantiradigan sokin, diqqatli o‘yin.',
      'value.ready':'Ochishga tayyor','value.readyText':'Hammasi mavzular bo‘yicha tartiblangan — uy yoki bog‘cha uchun.',

      'peek.title':"«Oshpazlik» mashg‘ulotlar qutisi ichiga nazar",'peek.lead':"Uyingizga keladigan narsalarning haqiqiy suratlari: hammasi qadoqlangan va o‘ynashga tayyor.",'peek.i1t':"Mavzuli topshiriqlar",'peek.i1d':"«Ortiqchasini top», juftlash va mantiq topshiriqlari — haqiqiy taom rasmlari bilan.",'peek.i2t':"Raqamlangan qo‘l mehnati to‘plamlari",'peek.i2d':"Har bir qo‘l mehnati kerakli hamma narsa bilan alohida yorliqli paketda: momiq simlar, pomponlar, ip, qog‘oz likopchalar va boshqalar.",'peek.i3t':"Bosqichma-bosqich ko‘rsatmalar",'peek.i3d':"Kichkintoylar tushunadigan oddiy rasmli ko‘rsatmalar.",'peek.i4t':"Oching va o‘ynang",'peek.i4d':"Hammasi tayyor. Faqat qaychi, yelim va rangli qalamlar kerak bo‘ladi — yoki bizning Starter Tool Kit.",'peek.c1':"Har bir qo‘l mehnati — o‘z yorliqli paketida",'peek.c2':"Momiq simdan qulupnay — kichkina qo‘llar yasagan",'peek.c3':"O‘z ishlaridan faxrlanmoqda!",
      'banner.sub':"Ular zavqlanadi. Ular o‘rganadi. Uni abadiy saqlab qo‘yishingiz shart emas.",'peek.c4':"Har bir qo‘l mehnati uchun rasmli bosqichlar — masalan, qo‘ziqorinli o‘tloq",'peek.c5':"Qo‘l mehnati va topshiriq varaqlari diqqat va kuzatuvchanlikni rivojlantiradi",
      'faq.title':"Tez-tez so‘raladigan savollar",
      'faq.q1':"Momo Activity Box nima?",
      'faq.a1':"<p>Momo Activity Box — bu tajribalar qutisi. Unda bolalar uyda ijod qilish, o‘rganish va qiziqarli vaqt o‘tkazishlari uchun tayyor topshiriqlar, ish varaqlari, qo‘l mehnati va barcha kerakli materiallar mavjud.</p><p>Qutini oching — va qiziqarli mashg‘ulotni boshlang!</p>",
      'faq.q2':"Activity Box qaysi yoshdagi bolalar uchun?",
      'faq.a2':"<p>Momo Activity Box asosan 2–5 yoshdagi bolalar uchun mo‘ljallangan. Bu yoshdagi bolalarga ota-ona yoki kattalarning yo‘l-yo‘rig‘i va yordami kerak bo‘ladi.</p><p>Kattaroq bolalar ham Momo’dan bahramand bo‘lishlari mumkin — ayniqsa qo‘l mehnati, ijod qilish va turli loyihalar bilan shug‘ullanishni yaxshi ko‘rsalar!</p>",
      'faq.q3':"Qo‘shimcha materiallar sotib olishim kerakmi?",
      'faq.a3':"<p>Yo‘q! Faoliyatlarni bajarish uchun kerak bo‘ladigan barcha materiallar qutining ichida mavjud.</p><p>✂️ Uyda qaychi, yelim va rangli qalamlar kabi kerakli vositalaringiz bormi? Ajoyib — o‘zingiznikidan foydalanishingiz mumkin!</p><p>Agar bular sizda bo‘lmasa, Starter Tool Kit’ni $8.99 ga qo‘shib olishingiz mumkin. Unda asosiy kerakli vositalar mavjud.</p>",
      'faq.q4':"Bolam bilan mashg‘ulot vaqtida men ham yonida bo‘lishim kerakmi?",
      'faq.a4':"<p>Ha. Momo Activity Box bolalar ota-ona yoki kattalar ko‘magida zavqlanishlari uchun yaratilgan.</p><p>Ayniqsa kichik yoshdagi bolalar bilan mashg‘ulot davomida kattalar nazorati tavsiya etiladi. Ba’zi faoliyatlarda kichik qismlar yoki kattalarning yordamini talab qiladigan vositalar bo‘lishi mumkin.</p>",
      'faq.q5':"Qutimdan biror narsa yetishmasa yoki shikastlangan bo‘lsa, nima qilaman?",
      'faq.a5':"<p>Biz sizga yordam berishdan xursand bo‘lamiz!</p><p>Iltimos, qutingizni olganingizdan keyin 3 kun ichida biz bilan <a href=\"mailto:momoboxusa@gmail.com\">momoboxusa@gmail.com</a> orqali bog‘laning va muammo haqida xabar bering. Vaziyatni imkon qadar tezroq hal qilishga harakat qilamiz.</p>",
      'faq.q6':"Momo Activity Box’ni qaytarishim mumkinmi?",
      'faq.a6':"<p>Faoliyat qutilarimiz har bir buyurtma uchun maxsus tayyorlanganligi sababli, barcha xaridlar yakuniy hisoblanadi va qaytarib berish qabul qilinmaydi.</p><p>Agar qutingiz shikastlangan holda yetib kelgan bo‘lsa yoki ichidan biror narsa yetishmasa, iltimos, yetkazib berilgan kundan boshlab 3 kun ichida <a href=\"mailto:momoboxusa@gmail.com\">momoboxusa@gmail.com</a> manziliga murojaat qiling. Sizga yordam beramiz.</p>",
      'faq.q7':"Momo Activity Box ta’limiy hisoblanadimi?",
      'faq.a7':"<p>Albatta! Momo’da biz o‘rganishni o‘yin bilan birlashtiramiz.</p><p>Faoliyatlar bolalarda ijodkorlik, mayda motorika, muammolarni hal qilish, ko‘rsatmalarga amal qilish, dastlabki bilimlar va mustaqil fikrlash kabi ko‘nikmalarni rivojlantirishga yordam beradi — bularning barchasi qiziqarli mashg‘ulotlar orqali amalga oshiriladi.</p>",
      'faq.q8':"Qutini qanchalik tez-tez olaman?",
      'faq.a8':"<p>Har bir quti — bir martalik xarid.</p>",
      'faq.q9':"Qutini sovg‘a sifatida sotib olsam bo‘ladimi?",
      'faq.a9':"<p>Albatta! Momo Activity Box tug‘ilgan kun, bayramlar yoki shunchaki bolaga qiziqarli mashg‘ulot sovg‘a qilmoqchi bo‘lgan har qanday payt uchun ajoyib sovg‘a bo‘ladi.</p>",

      'contact.lead':'Savollar, g‘oyalar yoki ko‘rishni istagan mavzuingiz bormi? Bizga yozing.',
      'contact.or':'Yoki bizga to‘g‘ridan-to‘g‘ri yozing:','contact.name':'Ismingiz','contact.email':'Elektron pochta','contact.message':'Xabar','contact.send':'Yuborish',

      'cart.title':'Savatingiz','cart.lead':'Foydali o‘yinga bir qadam yaqinlashdingiz! ♡','cart.continue':'Xaridni davom ettirish →',
      'toast.added':'Savatga qo‘shildi ♡','toast.subscribed':'Rahmat! Siz obuna bo‘ldingiz ♡','toast.contact':'Pochta ilovangiz ochilmoqda…',
      'modal.soonTitle':'{name} tez orada','modal.soonText':'Sahifa pastidagi yangiliklarga obuna bo‘ling — quti tayyor bo‘lishi bilan sizga xabar beramiz.',
      'modal.checkoutTitle':'Buyurtma berish deyarli tayyor','modal.checkoutText':'Onlayn to‘lov hali ulanmagan. Do‘kon ulangach, bu tugma xavfsiz to‘lov sahifasiga olib boradi.',
      'cart.emptyTitle':'Savatingiz bo‘sh','cart.emptyText':'Qiziqarli mashg‘ulotni boshlash uchun quti tanlang.','cart.emptyBtn':'Qutilarni ko‘rish',
      'cart.product':'Mahsulot','cart.price':'Narxi','cart.qty':'Soni','cart.total':'Jami','cart.remove':'O‘chirish','cart.dec':'Kamaytirish','cart.inc':'Ko‘paytirish',
      'cart.noteTitle':'Izoh (ixtiyoriy)','cart.notePlaceholder':'Masalan, sovg‘a tilagi yoki maxsus so‘rovlar…','cart.noteLabel':'Buyurtma izohi',
      'cart.summary':'Buyurtma tafsilotlari','cart.subtotal':'Oraliq summa','cart.items':['{n} ta mahsulot'],'cart.shipping':'Yetkazib berish','cart.free':'BEPUL','cart.checkout':'🔒 Buyurtma berish',
      'title.thanks':'Rahmat – MoMo','thanks.title':'Buyurtmangiz uchun rahmat!','thanks.text1':'To‘lov muvaffaqiyatli amalga oshdi. Stripe bir necha daqiqada elektron pochtangizga chek yuboradi.','thanks.text2':'MoMo qutingizni tayyorlayapmiz. Buyurtma bo‘yicha savollaringiz bormi? Istalgan vaqtda yozing:','thanks.back':'Bosh sahifaga',
      'cart.stripeNote':'Sonini tasdiqlash va Starter Tool Kit’ni qo‘shish Stripe’ning xavfsiz to‘lov sahifasida amalga oshiriladi.'
    }
  };

  var LANGS=['en','ru','uz'];
  function pick(){
    var l;
    try{l=localStorage.getItem('momo-lang')}catch(e){}
    if(LANGS.indexOf(l)<0){l=(navigator.language||'').slice(0,2).toLowerCase();if(LANGS.indexOf(l)<0)l='en'}
    return l;
  }
  var lang=pick();

  // Plural forms: Russian has three (1 товар, 2 товара, 5 товаров), English two, Uzbek one.
  function plural(forms,n){
    if(forms.length===1)return forms[0];
    if(lang==='ru'){var a=n%10,b=n%100;return forms[a===1&&b!==11?0:a>=2&&a<=4&&(b<10||b>=20)?1:2]}
    return forms[n===1?0:1];
  }
  function t(key,vars){
    var v=(T[lang]&&T[lang][key]!==undefined)?T[lang][key]:T.en[key];
    if(v===undefined)return key;
    if(Array.isArray(v))v=plural(v,vars&&vars.n);
    return String(v).replace(/\{(\w+)\}/g,function(m,k){return vars&&vars[k]!==undefined?vars[k]:m});
  }

  function apply(){
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      if(el.dataset.en===undefined)el.dataset.en=el.innerHTML;
      var v=lang!=='en'&&T[lang][el.dataset.i18n];
      el.innerHTML=v||el.dataset.en;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.dataset.i18nAttr.split(',').forEach(function(pair){
        var p=pair.split(':'),attr=p[0],key=p[1],store='en'+attr.replace(/-/g,'');
        if(el.dataset[store]===undefined)el.dataset[store]=el.getAttribute(attr)||'';
        var v=lang!=='en'&&T[lang][key];
        el.setAttribute(attr,v||el.dataset[store]);
      });
    });
    document.querySelectorAll('[data-lang]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===lang)});
  }
  function set(l){
    if(LANGS.indexOf(l)<0)return;
    lang=l;
    try{localStorage.setItem('momo-lang',l)}catch(e){}
    apply();
    document.dispatchEvent(new CustomEvent('momo:lang',{detail:l}));
  }

  document.addEventListener('click',function(e){var b=e.target.closest('[data-lang]');if(b)set(b.dataset.lang)});
  apply();
  window.MOMO_I18N={t:t,set:set,lang:function(){return lang}};
})();
