// ── SLIDER ──
const slides = document.querySelectorAll('.slide');
const captions = [
  'لوحة التحكم وإدارة النظام',
  'إدارة المبيعات والفواتير',
  'مراقبة مستويات المخزون',
  'تحليل أفضل المنتجات مبيعاً',
  'التقارير الأسبوعية التفصيلية',
  'التقارير والملخصات العامة'
];
const captionsEn = [
  'Control Panel & Dashboard',
  'Sales & Invoice Management',
  'Stock Level Monitoring',
  'Top Selling Products Analysis',
  'Detailed Weekly Reports',
  'General Dashboard & Summary'
];
let currentSlide = 0;
let slideTimer;
const dotsEl = document.getElementById('sliderDots');
const captionEl = document.getElementById('slideCaption');

slides.forEach((_,i)=>{
  const d = document.createElement('button');
  d.className = 'slider-dot'+(i===0?' active':'');
  d.onclick = ()=>goSlide(i);
  dotsEl.appendChild(d);
});

function goSlide(n){
  slides[currentSlide].classList.remove('active');
  dotsEl.children[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dotsEl.children[currentSlide].classList.add('active');
  captionEl.textContent = currentLang==='ar' ? captions[currentSlide] : captionsEn[currentSlide];
  resetTimer();
}
function changeSlide(dir){ goSlide(currentSlide+dir); }
function resetTimer(){ clearInterval(slideTimer); slideTimer=setInterval(()=>goSlide(currentSlide+1),3800); }
resetTimer();

// ── TABS ──
function switchTab(i){
  document.querySelectorAll('.tab-panel').forEach((p,idx)=>p.classList.toggle('active',idx===i));
  document.querySelectorAll('.tab-btn').forEach((b,idx)=>b.classList.toggle('active',idx===i));
}

// ── WHATSAPP ──
function sendWhatsApp(){
  const name=document.getElementById('nameInput').value.trim()||'زائر';
  const phone=document.getElementById('phoneInput').value.trim()||'لم يذكر';
  const msg=document.getElementById('msgInput').value.trim()||'أرغب في معرفة المزيد عن OrgCore';
  window.open('https://wa.me/962790824434?text='+encodeURIComponent('مرحباً، أنا '+name+' ('+phone+')\n'+msg),'_blank');
}

// ── MENU ──
function toggleMenu(){ document.getElementById('navLinks').classList.toggle('open'); }

// ── LANG ──
let currentLang='ar';
const T={
  heroBadge:{ar:'إدارة أعمالك بذكاء • بيانات مباشرة',en:'Smart Business Management • Live Data'},
  heroH1:{ar:'نظام <span>OrgCore</span><br>لإدارة المبيعات<br>والمخزون',en:'<span>OrgCore</span> System for<br>Sales & Inventory<br>Management'},
  heroQ1:{ar:'هل ما زلت تدير مبيعاتك يدويًا أو باستخدام أنظمة قديمة؟',en:'Still managing your sales manually or with outdated systems?'},
  heroQContent:{ar:`<div class="ck">مع OrgCore أصبح بإمكانك إدارة:</div><div class="ck">✅ المبيعات والفواتير بسهولة</div><div class="ck">✅ المخزون والمنتجات بدقة</div><div class="ck">✅ تقارير الأرباح والخسائر لحظة بلحظة</div><div class="ck">✅ نقاط البيع والكاشير باحترافية</div><div class="ck">✅ التكامل الكامل مع نظام الفوترة الوطني "فوترة"</div>`,en:`<div class="ck">With OrgCore, you can now manage:</div><div class="ck">✅ Sales and invoices easily</div><div class="ck">✅ Inventory and products accurately</div><div class="ck">✅ Live profit & loss reports</div><div class="ck">✅ POS and cashier professionally</div><div class="ck">✅ Full integration with national billing "Fatura"</div>`},
  heroCta1:{ar:'💬 ابدأ الآن',en:'💬 Get Started'},heroCta2:{ar:'🔍 اكتشف المميزات',en:'🔍 Explore Features'},
  navCta:{ar:'تواصل الآن',en:'Contact Now'},langBtn:{ar:'EN',en:'AR'},
  hfl1:{ar:'إجمالي المبيعات',en:'Total Sales'},hfl2:{ar:'مباشر',en:'Live'},hfl3:{ar:'حالة النظام',en:'System Status'},
  s1:{ar:'منتج يمكن إدارته',en:'Products Manageable'},s2:{ar:'فروع بلا حدود',en:'Unlimited Branches'},s3:{ar:'مراقبة مباشرة',en:'Live Monitoring'},s4:{ar:'متوافق مع الهاتف',en:'Mobile Compatible'},
  featTag:{ar:'المميزات',en:'Features'},featTitle:{ar:'كل ما تحتاجه في منصة واحدة',en:'Everything You Need in One Platform'},featSub:{ar:'نظام متكامل يغطي كل جوانب إدارة عملك، من المخزون إلى التقارير الشاملة',en:'A complete system covering all aspects of your business management.'},
  f1t:{ar:'إدارة المبيعات',en:'Sales Management'},f1d:{ar:'تتبع جميع معاملاتك البيعية عبر الفروع مع دعم طرق الدفع المتعددة.',en:'Track all sales transactions across branches with multiple payment methods.'},
  f2t:{ar:'إدارة المخزون',en:'Inventory Management'},f2d:{ar:'راقب مستويات مخزونك بدقة مع تنبيهات تلقائية عند نفاد الكميات.',en:'Monitor stock levels with automatic low-stock alerts and full movement reports.'},
  f3t:{ar:'التقارير والتحليلات',en:'Reports & Analytics'},f3d:{ar:'تقارير يومية وأسبوعية وشهرية مع رسوم بيانية تفاعلية.',en:'Daily, weekly, and monthly reports with interactive charts.'},
  f4t:{ar:'نقطة البيع POS',en:'POS System'},f4d:{ar:'واجهة كاشير سريعة وسهلة مع دعم الطابعات والباركود.',en:'Fast and easy cashier interface with printer and barcode support.'},
  f5t:{ar:'إدارة الفروع',en:'Branch Management'},f5d:{ar:'أدر فروعك المتعددة من مكان واحد مع نقل المخزون.',en:'Manage multiple branches from one place with inventory transfers.'},
  f6t:{ar:'نظام فوترة متكامل',en:'Integrated Billing'},f6d:{ar:'تكامل كامل مع نظام الفوترة الوطني "فوترة".',en:'Full integration with the national billing system "Fatura".'},
  ssTag:{ar:'لقطات الشاشة',en:'Screenshots'},ssTitle:{ar:'اكتشف النظام من الداخل',en:'Explore the System Inside'},ssSub:{ar:'واجهة نظيفة وسهلة الاستخدام بالعربية والإنجليزية',en:'Clean interface in Arabic and English'},
  tab0:{ar:'المبيعات',en:'Sales'},tab1:{ar:'التقارير الشهرية',en:'Monthly Reports'},tab2:{ar:'التقارير الأسبوعية',en:'Weekly Reports'},tab3:{ar:'حركات المخزون',en:'Stock Movements'},tab4:{ar:'الفواتير',en:'Invoices'},tab5:{ar:'أفضل المنتجات',en:'Top Products'},
  p0t:{ar:'إدارة المبيعات',en:'Sales Management'},p0d:{ar:'تتبع جميع المعاملات البيعية عبر فروعك مع فلترة متقدمة.',en:'Track all sales transactions across your branches with advanced filtering.'},p0l1:{ar:'تصفية حسب الفرع والتاريخ',en:'Filter by branch & date'},p0l2:{ar:'طرق دفع متعددة',en:'Multiple payment methods'},p0l3:{ar:'عرض تفاصيل كل عملية',en:'View transaction details'},p0l4:{ar:'تصدير البيانات Excel',en:'Export to Excel'},
  p1t:{ar:'التقارير الشهرية',en:'Monthly Reports'},p1d:{ar:'رسوم بيانية شاملة للمبيعات الشهرية مع فلترة حسب الفرع والسنة.',en:'Comprehensive monthly sales charts with filtering by branch and year.'},p1l1:{ar:'مخطط مبيعات شهري',en:'Monthly sales chart'},p1l2:{ar:'فلترة حسب الفرع',en:'Filter by branch'},p1l3:{ar:'مقارنة سنوية',en:'Annual comparison'},p1l4:{ar:'تصدير التقارير',en:'Export reports'},
  p2t:{ar:'التقارير الأسبوعية',en:'Weekly Reports'},p2d:{ar:'تقارير أسبوعية مفصلة حسب اليوم مع عدد الفواتير والمبيعات.',en:'Detailed weekly reports by day with invoice counts and sales.'},p2l1:{ar:'مخطط يومي للأسبوع',en:'Daily weekly chart'},p2l2:{ar:'عدد الفواتير يومياً',en:'Daily invoice count'},p2l3:{ar:'إجمالي المبيعات اليومي',en:'Daily sales total'},p2l4:{ar:'بطاقات تفصيلية لكل يوم',en:'Detailed day cards'},
  p3t:{ar:'حركات المخزون',en:'Stock Movements'},p3d:{ar:'تتبع جميع حركات الوارد والصادر والتحويلات بين الفروع.',en:'Track all inbound, outbound, and inter-branch transfer movements.'},p3l1:{ar:'تتبع الوارد والصادر',en:'Track in & out'},p3l2:{ar:'تحويل مخزون بين الفروع',en:'Inter-branch transfers'},p3l3:{ar:'تسجيل أسباب الحركة',en:'Log reasons'},p3l4:{ar:'فلترة متقدمة',en:'Advanced filtering'},
  p4t:{ar:'الفواتير التفصيلية',en:'Detailed Invoices'},p4d:{ar:'فواتير احترافية بتفاصيل كاملة لكل عملية بيع.',en:'Professional invoices with complete details for every sale.'},p4l1:{ar:'فواتير احترافية كاملة',en:'Complete professional invoices'},p4l2:{ar:'تفاصيل المنتجات والكميات',en:'Product & quantity details'},p4l3:{ar:'دعم الضريبة والخصم',en:'Tax & discount support'},p4l4:{ar:'طباعة وتصدير PDF',en:'Print & export PDF'},
  p5t:{ar:'أفضل المنتجات مبيعاً',en:'Top Selling Products'},p5d:{ar:'تقرير مرئي بالمنتجات الأكثر مبيعاً بشكل بياني ملون.',en:'Visual report showing top products in a colorful chart.'},p5l1:{ar:'ترتيب المنتجات حسب المبيعات',en:'Rank by sales'},p5l2:{ar:'رسوم بيانية ملونة',en:'Colorful charts'},p5l3:{ar:'مقارنة أداء المنتجات',en:'Compare products'},p5l4:{ar:'تحديد الفرص الرابحة',en:'Identify winners'},
  mobTag:{ar:'في كل مكان',en:'Everywhere'},
  mobTitle:{ar:'راقب متجرك من<br><span style="color:var(--accent)">أي مكان في العالم</span>',en:'Monitor Your Store from<br><span style="color:var(--accent)">Anywhere in the World</span>'},
  mobSub:{ar:'بيانات مباشرة على هاتفك. لا تحتاج أن تكون في المتجر لتعرف ما يحدث.',en:'Live data on your phone. You don\'t need to be in the store to know what\'s happening.'},
  mf1t:{ar:'يعمل على جميع الأجهزة',en:'Works on All Devices'},mf1d:{ar:'متوافق مع الهواتف والأجهزة اللوحية وسطح المكتب',en:'Compatible with phones, tablets, and desktops'},
  mf2t:{ar:'بيانات فورية ومباشرة',en:'Instant Live Data'},mf2d:{ar:'لحظة تسجيل أي بيع تراه على لوحتك فوراً',en:'See every sale on your dashboard the moment it\'s recorded'},
  mf3t:{ar:'تنبيهات ذكية',en:'Smart Alerts'},mf3d:{ar:'تنبيهات عند نفاد المخزون أو تجاوز الأهداف',en:'Alerts when stock runs out or targets are exceeded'},
  mf4t:{ar:'سحابي بالكامل',en:'Fully Cloud-Based'},mf4d:{ar:'لا حاجة لتثبيت برامج. يعمل من المتصفح مباشرة',en:'No software needed. Works from any browser'},
  liveBadge:{ar:'بيانات مباشرة الآن',en:'Live Data Now'},
  qTag:{ar:'لماذا OrgCore؟',en:'Why OrgCore?'},
  qTitle:{ar:'وفّر وقتك، <span>زِد أرباحك</span>، وسيطر على عملك',en:'Save Time, <span>Boost Profits</span>, Control Your Business'},
  qQ1:{ar:'هل ما زلت تدير مبيعاتك يدويًا أو باستخدام أنظمة قديمة؟',en:'Still managing sales manually or with outdated systems?'},
  qChecks:{ar:`<div class="ck">✅ <span>المبيعات والفواتير بسهولة</span></div><div class="ck">✅ <span>المخزون والمنتجات بدقة</span></div><div class="ck">✅ <span>تقارير الأرباح والخسائر لحظة بلحظة</span></div><div class="ck">✅ <span>نقاط البيع والكاشير باحترافية</span></div><div class="ck">✅ <span>التكامل الكامل مع نظام الفوترة الوطني "فوترة"</span></div>`,en:`<div class="ck">✅ <span>Sales & invoices easily</span></div><div class="ck">✅ <span>Inventory & products accurately</span></div><div class="ck">✅ <span>Live profit & loss reports</span></div><div class="ck">✅ <span>POS & cashier professionally</span></div><div class="ck">✅ <span>Full integration with national billing system</span></div>`},
  suitTitle:{ar:'💼 مناسب لـ:',en:'💼 Suitable for:'},suitText:{ar:'المحلات التجارية، السوبرماركت، المطاعم، والمشاريع بجميع أحجامها.',en:'Retail stores, supermarkets, restaurants, and businesses of all sizes.'},
  ctaSlogan:{ar:'🎯 وفر وقتك، زِد أرباحك، وسيطر على عملك بالكامل من <span>منصة واحدة</span>.',en:'🎯 Save your time, boost profits, and control your business from <span>one platform</span>.'},
  quoteCta:{ar:'ابدأ الآن 🚀',en:'Get Started 🚀'},
  secTag:{ar:'القطاعات',en:'Sectors'},secTitle:{ar:'مناسب لجميع الأعمال',en:'Suitable for All Businesses'},secSub:{ar:'مرن وقابل للتخصيص ليناسب طبيعة عملك',en:'Flexible and customizable for your business type'},
  sec1:{ar:'محلات تجارية',en:'Retail Stores'},sec2:{ar:'سوبرماركت',en:'Supermarkets'},sec3:{ar:'مطاعم',en:'Restaurants'},sec4:{ar:'محلات الملابس',en:'Clothing Stores'},sec5:{ar:'صيدليات',en:'Pharmacies'},sec6:{ar:'مشاريع متنوعة',en:'Various Businesses'},
  cTag:{ar:'تواصل معنا',en:'Contact Us'},cTitle:{ar:'جاهزون لمساعدتك',en:'Ready to Help You'},cSub:{ar:'لأي استفسار أو طلب عرض توضيحي، تواصل معنا عبر واتساب أو الهاتف.',en:'For any inquiry or demo request, contact us via WhatsApp or phone.'},
  cc1t:{ar:'واتساب',en:'WhatsApp'},cc2t:{ar:'اتصل بنا',en:'Call Us'},
  cfTitle:{ar:'أرسل لنا رسالة',en:'Send Us a Message'},fnLabel:{ar:'الاسم',en:'Name'},fpLabel:{ar:'رقم الهاتف',en:'Phone Number'},fmLabel:{ar:'رسالتك',en:'Your Message'},fSubmit:{ar:'إرسال عبر واتساب ✉️',en:'Send via WhatsApp ✉️'},
  footerSub:{ar:'نظام إدارة المبيعات والمخزون المتكامل',en:'Integrated Sales & Inventory Management System'},
  fl1:{ar:'المميزات',en:'Features'},fl2:{ar:'لقطات الشاشة',en:'Screenshots'},fl3:{ar:'تواصل معنا',en:'Contact'},footerCopy:{ar:'© 2026 OrgCore. جميع الحقوق محفوظة.',en:'© 2026 OrgCore. All rights reserved.'},
  nameInput:{ar:'اسمك الكريم',en:'Your name'},phoneInput:{ar:'07XXXXXXXX',en:'07XXXXXXXX'},msgInput:{ar:'كيف يمكننا مساعدتك؟',en:'How can we help you?'}
};

function toggleLang(){
  currentLang=currentLang==='ar'?'en':'ar';
  document.documentElement.lang=currentLang;
  document.body.dir=currentLang==='ar'?'rtl':'ltr';
  document.body.classList.toggle('ltr',currentLang==='en');
  for(const[id,vals] of Object.entries(T)){
    const el=document.getElementById(id);
    if(!el) continue;
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=vals[currentLang];
    else el.innerHTML=vals[currentLang];
  }
  captionEl.textContent = currentLang==='ar'?captions[currentSlide]:captionsEn[currentSlide];
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const txt=currentLang==='ar'?a.dataset.ar:a.dataset.en;
    if(txt) a.textContent=txt;
  });
}

// scroll reveal
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
