/* Musa Cars: edit the business details, hours, services, and vehicle examples here. */
const BUSINESS = {
  name: 'Musa Cars',
  displayName: 'Musa Cars Başakşehir',
  arabicName: 'مكتب موسى لتأجير السيارات',
  website: 'https://musacars.com',
  phoneDisplay: '+90 530 118 74 23',
  whatsappNumber: '905301187423',
  googleRating: '4.5',
  googleReviewCount: '220+',
  reviewUrl: 'https://www.google.com/maps/search/?api=1&query=Musa%20Cars%20Basaksehir%20Istanbul',
  address: 'Başakşehir, Ergenekon Cad. No:3, Turkuaz İnş. A Blok, 1. A Bodrum, Dükkan, Başakşehir / İstanbul',
  mapQuery: 'Musa Cars Başakşehir, Ergenekon Cad. No:3, İstanbul',
  hours: 'Her gün 09:00 – 19:00',
  location: 'Başakşehir, İstanbul',
};

const VEHICLES = [
  { model: 'Renault Clio', category: 'economy', categoryTr: 'Ekonomi', categoryAr: 'اقتصادية', categoryEn: 'Economy', transmission: ['Manuel', 'يدوي', 'Manual'], fuel: ['Benzin', 'بنزين', 'Petrol'], seats: 5, image: 'photo-1549317661-bd32c8ce0db2', position: 'center 58%' },
  { model: 'Audi A3', category: 'premium', categoryTr: 'Premium', categoryAr: 'فاخرة', categoryEn: 'Premium', transmission: ['Otomatik', 'أوتوماتيك', 'Automatic'], fuel: ['Benzin', 'بنزين', 'Petrol'], seats: 5, image: 'photo-1503376780353-7e6692767b70', position: 'center 52%' },
  { model: 'Opel Corsa', category: 'economy', categoryTr: 'Ekonomi', categoryAr: 'اقتصادية', categoryEn: 'Economy', transmission: ['Otomatik', 'أوتوماتيك', 'Automatic'], fuel: ['Benzin', 'بنزين', 'Petrol'], seats: 5, image: 'photo-1492144534655-ae79c964c9d7', position: 'center 60%' },
  { model: 'Renault Megane', category: 'comfort', categoryTr: 'Konfor', categoryAr: 'مريحة', categoryEn: 'Comfort', transmission: ['Otomatik', 'أوتوماتيك', 'Automatic'], fuel: ['Dizel', 'ديزل', 'Diesel'], seats: 5, image: 'photo-1502161254066-6c74afbf07aa', position: 'center 61%' },
  { model: 'Fiat Egea', category: 'comfort', categoryTr: 'Konfor', categoryAr: 'مريحة', categoryEn: 'Comfort', transmission: ['Manuel', 'يدوي', 'Manual'], fuel: ['Dizel', 'ديزل', 'Diesel'], seats: 5, image: 'photo-1552519507-da3b142c6e3d', position: 'center 55%' },
  { model: 'Peugeot 3008', category: 'suv', categoryTr: 'SUV', categoryAr: 'دفع رباعي', categoryEn: 'SUV', transmission: ['Otomatik', 'أوتوماتيك', 'Automatic'], fuel: ['Dizel', 'ديزل', 'Diesel'], seats: 5, image: 'photo-1519641471654-76ce0107ad1b', position: 'center 52%' },
];

// Keep airport transfer editable; it is deliberately unconfirmed until configured.
const SERVICES = [
  { key: 'daily', confirmed: true },
  { key: 'weekly', confirmed: true },
  { key: 'monthly', confirmed: true },
  { key: 'longTerm', confirmed: true },
  { key: 'airport', confirmed: false },
  { key: 'support', confirmed: true },
];

const TEXT = {
  tr: {
    skip: 'İçeriğe geç', nav: ['Ana Sayfa', 'Araçlarımız', 'Hizmetlerimiz', 'Hakkımızda', 'Yorumlar', 'İletişim'],
    eyebrow: 'İSTANBUL · BAŞAKŞEHİR', heroTitle: 'İstanbul’da <em>güvenilir</em> ve konforlu araç kiralama',
    heroDescription: 'Başakşehir merkezli Musa Cars ile günlük, haftalık ve aylık araç kiralama seçeneklerini keşfedin.',
    bookNow: 'Aracını Hemen Kirala', whatsappInfo: 'WhatsApp’tan Bilgi Al', trust: 'Google değerlendirmesi',
    pickupDate: 'Alış Tarihi', returnDate: 'Teslim Tarihi', carType: 'Araç Tipi', pickupPoint: 'Teslim Alma Noktası',
    chooseType: 'Tüm araç tipleri', search: 'Araçları Gör', locationPlaceholder: 'Başakşehir, İstanbul',
    benefits: [
      ['Geniş Araç Seçeneği', 'İhtiyacınıza uygun farklı araç modelleri.'],
      ['Şeffaf Fiyatlandırma', 'Sürpriz ücretler olmadan açık ve anlaşılır fiyatlar.'],
      ['Hızlı ve Kolay Kiralama', 'Basit işlemler ve hızlı teslimat.'],
      ['7/24 Destek', 'Kiralama süreciniz boyunca yanınızdayız.'],
    ],
    fleetEyebrow: 'KONFORLU BİR YOLCULUK', fleetTitle: 'Size uygun aracı bulun',
    fleetDescription: 'Konfor, performans ve bütçenize uygun araç seçeneklerini keşfedin.',
    demoNote: 'Gösterilen modeller örnektir. Araç uygunluğu ve fiyat bilgisi için lütfen bizimle iletişime geçin.',
    example: 'Model örneği · Stok garantisi yok', priceNote: 'Güncel fiyat ve uygunluk için bilgi alın',
    details: 'Detayları Gör', carWhatsapp: 'WhatsApp’tan Sor', seats: 'kişi', seatsLabel: 'Kişi',
    noCars: 'Bu araç tipinde model gösterilmemektedir.',
    whyEyebrow: 'YAKININIZDA, YANINIZDA', whyTitle: 'Neden Musa Cars?',
    whyDescription: 'İstanbul’daki yolculuğunuza içiniz rahat başlayın. İhtiyacınıza uygun kiralama için bize danışın.',
    whyPoints: ['Yeni ve bakımlı araçlar', 'Hızlı teslimat', 'Profesyonel ekip', 'Bütçenize uygun seçenekler', 'Günlük / haftalık / aylık kiralama', 'Kiralama boyunca destek'],
    whyCaption: 'İstanbul yollarında, kendi ritminizde.', contactUs: 'Bize Ulaşın',
    reviewsEyebrow: 'GERÇEK DENEYİMLER', reviewsTitle: 'Müşterilerimiz ne diyor?',
    googleReviews: 'Google değerlendirmesi', viewReviews: 'Tüm değerlendirmeleri görüntüle',
    reviewAttribution: 'Google’da paylaşılan müşteri yorumu',
    quotes: [
      'Harika bir deneyim; iletişim nazik ve saygılı, çalışanlar ilgili ve yardımseverdi. Araç çok iyi durumdaydı, hizmet gerçekten güzeldi.',
      'Araç kiralama deneyimim baştan sona çok iyiydi. İşlemler hızlı ve anlaşılırdı; araç temiz ve çok iyi durumdaydı.',
      'Şirketle birkaç kez çalıştım; günlerce, haftalarca ve aylarca araç kiraladım. Araçlar yeni, iletişim saygılı, destek mükemmel.',
    ],
    processEyebrow: 'ÜÇ BASİT ADIM', processTitle: 'Yola çıkmak bu kadar kolay',
    steps: [['Aracınızı seçin', 'Araçlara göz atın ve sizin için uygun olanı seçin.'], ['Bizimle iletişime geçin', 'Rezervasyonunuzu görüşmek için WhatsApp’tan ya da telefonla arayın.'], ['Aracınızı teslim alın', 'Aracınızı teslim alın ve gönül rahatlığıyla yola çıkın.']],
    servicesEyebrow: 'İHTİYACINIZA UYGUN', servicesTitle: 'Kiralama seçeneklerimiz',
    services: { daily: 'Günlük Araç Kiralama', weekly: 'Haftalık Araç Kiralama', monthly: 'Aylık Araç Kiralama', longTerm: 'Uzun Dönem Kiralama', airport: 'Havalimanı Teslimat / Teslim Alma', support: '7/24 Destek' },
    serviceCheck: 'Uygunluğu bilgi alarak teyit edin',
    locationEyebrow: 'BAŞAKŞEHİR · İSTANBUL', locationTitle: 'Bizi ziyaret edin', addressLabel: 'Adres', phoneLabel: 'Telefon', hoursLabel: 'Çalışma saatleri',
    getDirections: 'Yol Tarifi Al', call: 'Hemen Ara', mapCaption: 'Başakşehir · İstanbul', mapAccessible: 'Başakşehir konum gösterimi',
    finalEyebrow: 'YOLA ÇIKMA SIRASI SİZDE', finalTitle: 'Yola çıkmaya hazır mısınız?',
    finalDescription: 'Size uygun aracınızı seçin ve Musa Cars ile yolculuğunuza başlayın.', exploreCars: 'Araçları İncele',
    footerDescription: 'Başakşehir’de güvenilir, hızlı ve konforlu araç kiralama hizmeti.', linksTitle: 'Hızlı bağlantılar', contactTitle: 'Bize ulaşın', footerLocation: 'Başakşehir / İstanbul',
    copyright: 'Tüm hakları saklıdır.', mobileCall: 'Ara', mobileWhatsApp: 'WhatsApp', mobileBook: 'Araç Kirala',
    selectedType: 'Seçilen araç tipi: ',
  },
  ar: {
    skip: 'انتقل إلى المحتوى', nav: ['الرئيسية', 'سياراتنا', 'خدماتنا', 'من نحن', 'آراء العملاء', 'اتصل بنا'],
    eyebrow: 'إسطنبول · باشاك شهير', heroTitle: 'استأجر سيارتك في إسطنبول <em>بسهولة وراحة</em>',
    heroDescription: 'اكتشف خيارات تأجير السيارات اليومية والأسبوعية والشهرية مع مكتب موسى في باشاك شهير.',
    bookNow: 'احجز سيارتك الآن', whatsappInfo: 'استفسر عبر واتساب', trust: 'تقييمات على Google',
    pickupDate: 'تاريخ الاستلام', returnDate: 'تاريخ التسليم', carType: 'نوع السيارة', pickupPoint: 'مكان الاستلام',
    chooseType: 'جميع أنواع السيارات', search: 'اعرض السيارات', locationPlaceholder: 'باشاك شهير، إسطنبول',
    benefits: [
      ['خيارات متنوعة من السيارات', 'طرازات مختلفة تلبي احتياجاتك.'],
      ['أسعار واضحة', 'أسعار شفافة وواضحة دون رسوم مفاجئة.'],
      ['تأجير سريع وسهل', 'إجراءات بسيطة وتسليم سريع.'],
      ['دعم طوال الوقت', 'نحن إلى جانبك طوال فترة التأجير.'],
    ],
    fleetEyebrow: 'رحلة مريحة', fleetTitle: 'اعثر على السيارة المناسبة',
    fleetDescription: 'اكتشف خيارات تناسب راحتك وأداءك وميزانيتك.',
    demoNote: 'السيارات المعروضة أمثلة. يرجى التواصل معنا للاستفسار عن التوافر والأسعار.',
    example: 'طراز توضيحي · التوافر غير مؤكد', priceNote: 'استفسر عن السعر والتوافر الحالي',
    details: 'تفاصيل السيارة', carWhatsapp: 'استفسر عبر واتساب', seats: 'مقاعد', seatsLabel: 'مقاعد',
    noCars: 'لا توجد سيارات معروضة ضمن هذه الفئة.',
    whyEyebrow: 'قريبون منك، إلى جانبك', whyTitle: 'لماذا تختار مكتب موسى؟',
    whyDescription: 'ابدأ رحلتك في إسطنبول براحة بال. تواصل معنا لاختيار سيارة تناسب احتياجاتك.',
    whyPoints: ['سيارات حديثة ومعتنى بها', 'تسليم سريع', 'فريق محترف', 'خيارات تناسب ميزانيتك', 'تأجير يومي وأسبوعي وشهري', 'دعم خلال فترة التأجير'],
    whyCaption: 'على طرق إسطنبول، على راحتك.', contactUs: 'تواصل معنا',
    reviewsEyebrow: 'تجارب حقيقية', reviewsTitle: 'ماذا يقول عملاؤنا؟',
    googleReviews: 'تقييم على Google', viewReviews: 'عرض جميع التقييمات',
    reviewAttribution: 'مراجعة عميل منشورة على Google',
    quotes: [
      'تجربة ممتازة وتعامل راقي ومحترم والموظفين متعاونين وخلوقين. السيارة كانت بحالة ممتازة والخدمة كانت رائعة.',
      'استأجرت سيارة وكانت التجربة ممتازة من البداية إلى النهاية. الإجراءات كانت سريعة وواضحة والسيارة كانت نظيفة وفي حالة ممتازة.',
      'تعاملت مع الشركة عدة مرات، واستأجرت سيارات لعدة أيام وأسابيع وأشهر. السيارات جديدة والتعامل محترم والدعم ممتاز.',
    ],
    processEyebrow: 'ثلاث خطوات سهلة', processTitle: 'طريقك أسهل مما تتصور',
    steps: [['اختر سيارتك', 'تصفّح السيارات واختر ما يناسبك.'], ['تواصل معنا', 'تواصل عبر واتساب أو الهاتف لتأكيد الحجز.'], ['استلم سيارتك', 'استلم السيارة وانطلق براحة واطمئنان.']],
    servicesEyebrow: 'حسب احتياجاتك', servicesTitle: 'خيارات التأجير',
    services: { daily: 'تأجير سيارات يومي', weekly: 'تأجير سيارات أسبوعي', monthly: 'تأجير سيارات شهري', longTerm: 'تأجير طويل الأمد', airport: 'استلام وتسليم في المطار', support: 'دعم على مدار الساعة' },
    serviceCheck: 'يرجى التواصل للتأكد من التوافر',
    locationEyebrow: 'باشاك شهير · إسطنبول', locationTitle: 'تفضلوا بزيارتنا', addressLabel: 'العنوان', phoneLabel: 'الهاتف', hoursLabel: 'ساعات العمل',
    getDirections: 'الاتجاهات', call: 'اتصل الآن', mapCaption: 'باشاك شهير · إسطنبول', mapAccessible: 'خريطة توضيحية لموقع باشاك شهير',
    finalEyebrow: 'الطريق بانتظارك', finalTitle: 'هل أنت مستعد للانطلاق؟',
    finalDescription: 'اختر السيارة المناسبة وابدأ رحلتك مع مكتب موسى.', exploreCars: 'تصفّح السيارات',
    footerDescription: 'خدمات تأجير سيارات موثوقة ومريحة في باشاك شهير.', linksTitle: 'روابط سريعة', contactTitle: 'تواصل معنا', footerLocation: 'باشاك شهير / إسطنبول',
    copyright: 'جميع الحقوق محفوظة.', mobileCall: 'اتصال', mobileWhatsApp: 'واتساب', mobileBook: 'احجز الآن',
    selectedType: 'فئة السيارة: ',
  },
  en: {
    skip: 'Skip to content', nav: ['Home', 'Our Cars', 'Services', 'About Us', 'Reviews', 'Contact'],
    eyebrow: 'ISTANBUL · BAŞAKŞEHİR', heroTitle: 'Reliable and comfortable car rental <em>in Istanbul</em>',
    heroDescription: 'Discover daily, weekly, and monthly rental options with Musa Cars, based in Başakşehir.',
    bookNow: 'Book Your Car', whatsappInfo: 'Ask on WhatsApp', trust: 'Google reviews',
    pickupDate: 'Pick-up date', returnDate: 'Return date', carType: 'Vehicle type', pickupPoint: 'Pick-up location',
    chooseType: 'All vehicle types', search: 'Explore the fleet', locationPlaceholder: 'Başakşehir, Istanbul',
    benefits: [
      ['A choice of vehicles', 'Different models to fit your needs.'],
      ['Clear pricing', 'Straightforward prices with no surprises.'],
      ['Easy, quick rental', 'Simple arrangements and quick handover.'],
      ['Here when you need us', 'By your side throughout your rental.'],
    ],
    fleetEyebrow: 'MADE FOR THE JOURNEY', fleetTitle: 'Find the right car for you',
    fleetDescription: 'Discover options that suit your comfort, performance, and budget.',
    demoNote: 'Vehicles shown are examples. Contact us to check availability and pricing.',
    example: 'Example model · Availability unconfirmed', priceNote: 'Ask about current rates and availability',
    details: 'Vehicle details', carWhatsapp: 'Ask on WhatsApp', seats: 'seats', seatsLabel: 'Seats',
    noCars: 'No examples are shown in this vehicle category.',
    whyEyebrow: 'NEARBY AND HERE TO HELP', whyTitle: 'Why Musa Cars?',
    whyDescription: 'Set off in Istanbul with peace of mind. Talk to us about a rental that fits your needs.',
    whyPoints: ['Newer, well-maintained cars', 'Quick handover', 'A professional team', 'Options for your budget', 'Daily, weekly, and monthly rentals', 'Support throughout your rental'],
    whyCaption: 'On Istanbul roads, at your own pace.', contactUs: 'Get in touch',
    reviewsEyebrow: 'REAL EXPERIENCES', reviewsTitle: 'What our customers say',
    googleReviews: 'Google reviews', viewReviews: 'See all reviews',
    reviewAttribution: 'Customer review shared on Google',
    quotes: [
      'A great experience, with kind, respectful staff who were happy to help. The car was in excellent condition and the service was wonderful.',
      'Renting a car here was an excellent experience from start to finish. The process was quick and clear; the car was clean and in excellent condition.',
      'I have rented from this company several times, for days, weeks, and months. The cars are new, the team is respectful, and the support is excellent.',
    ],
    processEyebrow: 'THREE SIMPLE STEPS', processTitle: 'Getting on the road is easy',
    steps: [['Choose your car', 'Browse the vehicles and find the right fit.'], ['Get in touch', 'Contact us by WhatsApp or phone to discuss your booking.'], ['Pick up your car', 'Collect your car and enjoy the drive.']],
    servicesEyebrow: 'HERE FOR YOUR NEEDS', servicesTitle: 'Rental options',
    services: { daily: 'Daily car rental', weekly: 'Weekly car rental', monthly: 'Monthly car rental', longTerm: 'Long-term rental', airport: 'Airport pick-up / drop-off', support: 'Support around the clock' },
    serviceCheck: 'Please contact us to confirm availability',
    locationEyebrow: 'BAŞAKŞEHİR · ISTANBUL', locationTitle: 'Come and visit', addressLabel: 'Address', phoneLabel: 'Phone', hoursLabel: 'Opening hours',
    getDirections: 'Get directions', call: 'Call now', mapCaption: 'Başakşehir · Istanbul', mapAccessible: 'Map-style illustration of the Başakşehir location',
    finalEyebrow: 'YOUR JOURNEY STARTS HERE', finalTitle: 'Ready to hit the road?',
    finalDescription: 'Find a car that suits you and start your journey with Musa Cars.', exploreCars: 'Explore vehicles',
    footerDescription: 'Reliable, easy, comfortable car rental in Başakşehir.', linksTitle: 'Quick links', contactTitle: 'Contact', footerLocation: 'Başakşehir / Istanbul',
    copyright: 'All rights reserved.', mobileCall: 'Call', mobileWhatsApp: 'WhatsApp', mobileBook: 'Book now',
    selectedType: 'Vehicle category: ',
  },
};

const ICONS = {
  fleet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 17h14l1.5-6-2-5H5.5l-2 5L5 17Z"/><path d="M3.5 11h17M6 17v2m12-2v2M7 14h.01M17 14h.01"/><path d="M8 6 9 4h6l1 2"/></svg>',
  price: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13 12 21l-9-9 8-9h8l1 10Z"/><path d="M16 8h.01"/><path d="M9 14.5c.5.7 1.2 1 2.1 1 1.1 0 1.9-.6 1.9-1.5S12.3 12.5 11 12s-2-.9-2-1.8.8-1.7 2-1.7c.7 0 1.3.2 1.8.6M11 7v1.5m0 7V17"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M8 2h8"/></svg>',
  support: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 13v-2a9 9 0 0 1 18 0v2"/><path d="M5 13h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM19 19c-1 2-3 3-6 3"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.6a8.6 8.6 0 0 1-12.7 7.5L3 20.5l1.4-4.6A8.6 8.6 0 1 1 20.5 11.6Z"/><path d="M8.4 8.5c.3-.7.6-.7 1-.7h.4c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.3.4-.1.7.5.9 1.3 1.7 2.2 2.1.3.1.5.1.7-.1l.8-1c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .5-.2 1-.6 1.3-.5.4-1.1.6-1.8.5-1-.1-2-.6-3.1-1.4a10 10 0 0 1-2.6-2.6c-.6-1-.9-1.8-.7-2.5.1-.3.3-.5.7-.6Z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.6 3.7 2 2 0 0 1 3.6 1.5h3a2 2 0 0 1 2 1.7l.5 2.7a2 2 0 0 1-.6 1.8l-1.3 1a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.9 2.2Z"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15m6-12v15"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.4.8l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.4-.8l-1.7.7-1.4-2.4 1.4-1.1a8 8 0 0 1 0-1.7l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.4-.8l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.4.8l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1 0 1.6Z"/></svg>',
};

let currentLanguage = 'tr';
let selectedCategory = 'all';
const byId = (id) => document.getElementById(id);
const lang = () => TEXT[currentLanguage];
const whatsapp = (message = '') => `https://wa.me/${BUSINESS.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`;
const navTargets = ['home', 'fleet', 'services', 'about', 'reviews', 'contact'];
const benefitIcons = ['fleet', 'price', 'clock', 'support'];
const serviceIconKeys = ['fleet', 'clock', 'price', 'fleet', 'pin', 'support'];

function renderBenefits() {
  return `<section class="benefits" aria-label="${lang().benefits.map((x) => x[0]).join(', ')}"><div class="container benefit-grid">${lang().benefits.map(([title, description], i) => `<article class="benefit" data-reveal><span class="benefit-icon">${ICONS[benefitIcons[i]]}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join('')}</div></section>`;
}

function renderCarCard(car) {
  const category = car[`category${currentLanguage === 'tr' ? 'Tr' : currentLanguage === 'ar' ? 'Ar' : 'En'}`];
  const question = currentLanguage === 'ar' ? `مرحباً، أود الاستفسار عن سيارة ${car.model} وأسعارها وتوافرها.` : currentLanguage === 'en' ? `Hello, I would like to ask about the ${car.model}, including current rates and availability.` : `Merhaba, ${car.model} için güncel fiyat ve uygunluk bilgisi alabilir miyim?`;
  const img = `https://images.unsplash.com/${car.image}?auto=format&fit=crop&w=800&q=78`;
  return `<article class="car-card" data-reveal><div class="car-image-wrap"><img class="car-image" src="${img}" alt="${car.model} model araç örneği" loading="lazy" decoding="async" style="object-position:${car.position}"/><span class="demo-label">${lang().example}</span></div><div class="car-details"><span class="car-category">${category}</span><h3 class="car-name">${car.model}</h3><div class="car-specs"><span class="car-spec">${ICONS.gear}<span>${car.transmission[currentLanguage === 'tr' ? 0 : currentLanguage === 'ar' ? 1 : 2]}</span></span><span class="car-spec">${ICONS.fleet}<span>${car.fuel[currentLanguage === 'tr' ? 0 : currentLanguage === 'ar' ? 1 : 2]}</span></span><span class="car-spec">${ICONS.person}<span>${car.seats} ${lang().seats}</span></span></div><p class="price-note">${lang().priceNote}</p><div class="car-actions"><a class="button car-details-link" href="${whatsapp(question)}" target="_blank" rel="noopener noreferrer">${lang().details}</a><a class="button car-whatsapp" href="${whatsapp(question)}" target="_blank" rel="noopener noreferrer">${ICONS.phone}${lang().carWhatsapp}</a></div></div></article>`;
}

function render() {
  const t = lang();
  const links = t.nav.map((label, i) => `<a href="#${navTargets[i]}" data-nav="${navTargets[i]}">${label}</a>`).join('');
  byId('app').innerHTML = `
    <header class="site-header" id="site-header"><div class="header-inner">
      <a class="brand" href="#home" aria-label="Musa Cars Başakşehir"><span class="brand-mark" aria-hidden="true">M</span><span class="brand-words"><span class="brand-name">MUSA CARS</span><span class="brand-place">${currentLanguage === 'ar' ? BUSINESS.arabicName : 'BAŞAKŞEHİR'}</span></span></a>
      <nav class="main-nav" id="main-nav" aria-label="${currentLanguage === 'ar' ? 'التنقل الرئيسي' : currentLanguage === 'en' ? 'Main navigation' : 'Ana gezinme'}">${links}</nav>
      <div class="header-actions"><div class="language-switch" aria-label="${currentLanguage === 'ar' ? 'اللغة' : currentLanguage === 'en' ? 'Language' : 'Dil'}" role="group">${['tr','ar','en'].map((key) => `<button type="button" data-language="${key}" aria-pressed="${key === currentLanguage}" lang="${key}">${key.toUpperCase()}</button>`).join('')}</div><a class="header-call" href="tel:${BUSINESS.whatsappNumber}">${ICONS.phone}<span>${BUSINESS.phoneDisplay}</span></a><a class="header-whatsapp" href="${whatsapp()}" target="_blank" rel="noopener noreferrer">${ICONS.whatsapp}<span>${t.whatsappInfo}</span></a><button class="menu-toggle" type="button" aria-label="${currentLanguage === 'ar' ? 'افتح القائمة' : currentLanguage === 'en' ? 'Open menu' : 'Menüyü aç'}" aria-expanded="false" aria-controls="main-nav">${ICONS.menu}</button></div>
    </div></header>
    <main id="main">
      <section class="hero" id="home"><div class="hero-inner"><div class="hero-copy"><span class="eyebrow hero-eyebrow">${t.eyebrow}</span><h1>${t.heroTitle}</h1><p class="hero-description">${t.heroDescription}</p><div class="hero-actions"><a class="button button-gold" href="#booking">${t.bookNow}</a><a class="button button-outline" href="${whatsapp()}" target="_blank" rel="noopener noreferrer">${ICONS.phone}${t.whatsappInfo}</a></div><div class="hero-trust"><span class="trust-stars" aria-label="5 stars">★★★★★</span><strong>${BUSINESS.googleRating} / 5</strong><span>— ${BUSINESS.googleReviewCount} ${t.trust}</span></div></div></div>
        <div class="booking-wrap" id="booking"><form class="booking-card" id="booking-form"><div class="booking-field"><label for="pickup-date">${t.pickupDate}</label><input id="pickup-date" name="pickup" type="date" required /></div><div class="booking-field"><label for="return-date">${t.returnDate}</label><input id="return-date" name="return" type="date" required /></div><div class="booking-field"><label for="vehicle-category">${t.carType}</label><select id="vehicle-category" name="category"><option value="all">${t.chooseType}</option><option value="economy">${currentLanguage === 'ar' ? 'اقتصادية' : currentLanguage === 'en' ? 'Economy' : 'Ekonomi'}</option><option value="comfort">${currentLanguage === 'ar' ? 'مريحة' : currentLanguage === 'en' ? 'Comfort' : 'Konfor'}</option><option value="premium">Premium</option><option value="suv">SUV</option></select></div><div class="booking-field"><label for="pickup-location">${t.pickupPoint}</label><input id="pickup-location" name="location" type="text" value="${currentLanguage === 'ar' ? 'باشاك شهير، إسطنبول' : currentLanguage === 'en' ? 'Başakşehir, Istanbul' : 'Başakşehir, İstanbul'}" autocomplete="address-level2" /></div><button class="button button-gold" type="submit">${t.search}</button></form></div>
      </section>
      ${renderBenefits()}
      <section class="fleet" id="fleet"><div class="container"><div class="fleet-top"><div class="section-heading" data-reveal><span class="eyebrow">${t.fleetEyebrow}</span><h2>${t.fleetTitle}</h2><p>${t.fleetDescription}</p></div><p class="fleet-disclaimer" data-reveal>${t.demoNote}</p></div><div class="fleet-grid" id="fleet-grid">${VEHICLES.map(renderCarCard).join('')}</div></div></section>
      <section class="section why" id="about"><div class="container why-grid"><div class="why-image" data-reveal><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=82" alt="Modern araç İstanbul yolculuğu için hazır" loading="lazy" decoding="async"/><div class="why-image-caption"><span>${t.whyCaption}</span><span>ISTANBUL · TR</span></div></div><div class="why-copy" data-reveal><span class="eyebrow">${t.whyEyebrow}</span><h2>${t.whyTitle}</h2><p>${t.whyDescription}</p><ul class="why-points">${t.whyPoints.map((point) => `<li><span class="check-mark" aria-hidden="true">✓</span>${point}</li>`).join('')}</ul><a class="button button-dark" href="#contact">${t.contactUs}</a></div></div></section>
      <section class="reviews" id="reviews"><div class="container"><div class="reviews-head"><div class="section-heading" data-reveal><span class="eyebrow">${t.reviewsEyebrow}</span><h2>${t.reviewsTitle}</h2></div><div class="rating-block" data-reveal><strong class="rating-score">${BUSINESS.googleRating}<span style="font-size:.52em"> / 5</span></strong><div class="rating-detail"><span class="trust-stars" aria-label="5 stars">★★★★★</span><span>${BUSINESS.googleReviewCount} ${t.googleReviews}</span></div></div></div><div class="review-grid">${t.quotes.map((quote, i) => `<article class="review-card" data-reveal><div class="review-stars" aria-label="5 stars">★★★★★</div><blockquote class="review-quote">“${quote}”</blockquote><div class="reviewer"><span class="reviewer-badge" aria-hidden="true">G</span>${t.reviewAttribution}</div></article>`).join('')}</div><a class="reviews-link" href="${BUSINESS.reviewUrl}" target="_blank" rel="noopener noreferrer">${t.viewReviews} ${currentLanguage === 'ar' ? '←' : '→'}</a></div></section>
      <section class="section process" aria-labelledby="process-title"><div class="container"><div class="section-heading" data-reveal><span class="eyebrow">${t.processEyebrow}</span><h2 id="process-title">${t.processTitle}</h2></div><div class="steps">${t.steps.map(([title, text], i) => `<article class="step" data-reveal><span class="step-number">0${i+1}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div></div></section>
      <section class="services" id="services"><div class="container"><div class="section-heading" data-reveal><span class="eyebrow">${t.servicesEyebrow}</span><h2>${t.servicesTitle}</h2></div><div class="service-grid">${SERVICES.map((service, i) => `<article class="service-card" data-reveal><span class="service-index">${ICONS[serviceIconKeys[i]]}</span><div><h3>${t.services[service.key]}</h3>${service.confirmed ? '' : `<span class="service-editable">${t.serviceCheck}</span>`}</div></article>`).join('')}</div></div></section>
      <section class="section location" id="contact"><div class="container location-grid"><div class="location-copy" data-reveal><span class="eyebrow">${t.locationEyebrow}</span><h2>${t.locationTitle}</h2><div class="contact-list"><div class="contact-item"><span class="contact-icon">${ICONS.pin}</span><div class="contact-copy"><strong>${t.addressLabel}</strong><span>${BUSINESS.address}</span></div></div><div class="contact-item"><span class="contact-icon">${ICONS.phone}</span><div class="contact-copy"><strong>${t.phoneLabel}</strong><a class="contact-copy" href="tel:${BUSINESS.whatsappNumber}"><span dir="ltr">${BUSINESS.phoneDisplay}</span></a></div></div><div class="contact-item"><span class="contact-icon">${ICONS.clock}</span><div class="contact-copy"><strong>${t.hoursLabel}</strong><span dir="ltr">${BUSINESS.hours}</span></div></div></div><div class="location-actions"><a class="button button-dark" href="${mapUrl}" target="_blank" rel="noopener noreferrer">${ICONS.map}${t.getDirections}</a><a class="button button-soft" href="${whatsapp()}" target="_blank" rel="noopener noreferrer">${ICONS.phone}${t.whatsappInfo}</a><a class="button button-soft" href="tel:${BUSINESS.whatsappNumber}">${ICONS.phone}${t.call}</a></div></div><a class="map" href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="${t.mapAccessible}"><span class="map-label">${t.mapCaption}</span><span class="map-road-label map-road-one">${currentLanguage === 'ar' ? 'إرغينيكون جادّسي' : currentLanguage === 'en' ? 'Ergenekon Cad.' : 'Ergenekon Cad.'}</span><span class="map-road-label map-road-two">${currentLanguage === 'ar' ? 'باشاك شهير' : currentLanguage === 'en' ? 'Başakşehir' : 'Başakşehir'}</span><span class="map-pin" aria-hidden="true"><span>M</span></span><span class="map-source">${currentLanguage === 'ar' ? 'خريطة توضيحية' : currentLanguage === 'en' ? 'Illustrative map' : 'Şematik harita'}</span></a></div></section>
      <section class="final-cta"><div class="container cta-inner"><div class="cta-copy" data-reveal><span class="eyebrow">${t.finalEyebrow}</span><h2>${t.finalTitle}</h2><p>${t.finalDescription}</p></div><div class="cta-actions" data-reveal><a class="button button-gold" href="#fleet">${t.exploreCars}</a><a class="button button-outline" href="${whatsapp()}" target="_blank" rel="noopener noreferrer">${ICONS.phone}${t.whatsappInfo}</a></div></div></section>
    </main>
    <footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="#home"><span class="brand-mark" aria-hidden="true">M</span><span class="brand-words"><span class="brand-name">MUSA CARS</span><span class="brand-place">${currentLanguage === 'ar' ? BUSINESS.arabicName : 'BAŞAKŞEHİR'}</span></span></a><p>${t.footerDescription}</p></div><div><h2 class="footer-title">${t.linksTitle}</h2><nav class="footer-links" aria-label="${t.linksTitle}">${links}</nav></div><div class="footer-contact"><h2 class="footer-title">${t.contactTitle}</h2><a href="tel:${BUSINESS.whatsappNumber}" dir="ltr">${BUSINESS.phoneDisplay}</a><span>${t.footerLocation}</span><a href="${whatsapp()}" target="_blank" rel="noopener noreferrer">WhatsApp</a></div></div><div class="footer-bottom"><span>© 2026 ${BUSINESS.displayName}. ${t.copyright}</span><a href="${BUSINESS.website}">musacars.com</a></div></div></footer>
    <nav class="mobile-bar" aria-label="${currentLanguage === 'ar' ? 'إجراءات سريعة' : currentLanguage === 'en' ? 'Quick actions' : 'Hızlı işlemler'}"><a href="${whatsapp()}" target="_blank" rel="noopener noreferrer">${ICONS.phone}${t.mobileWhatsApp}</a><a href="tel:${BUSINESS.whatsappNumber}">${ICONS.phone}${t.mobileCall}</a><a href="#booking">${ICONS.fleet}${t.mobileBook}</a></nav>`;
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.body.lang = currentLanguage;
  document.body.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.title = currentLanguage === 'ar' ? 'مكتب موسى لتأجير السيارات | باشاك شهير' : currentLanguage === 'en' ? 'Musa Cars Başakşehir | Car Rental in Istanbul' : 'Musa Cars Başakşehir | İstanbul’da Araç Kiralama';
  byId('pickup-date').min = new Date().toISOString().slice(0, 10);
  const returnDate = byId('return-date');
  returnDate.min = byId('pickup-date').min;
  byId('fleet-grid').innerHTML = VEHICLES.filter((car) => selectedCategory === 'all' || car.category === selectedCategory).map(renderCarCard).join('') || `<p class="empty-results">${t.noCars}</p>`;
  if (window.lucide) window.lucide.createIcons();
  document.querySelector('.skip-link').textContent = t.skip;
  installInteractions();
}

function installInteractions() {
  const header = byId('site-header');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 25);
  window.removeEventListener('scroll', window.__musaHeaderScroll);
  window.__musaHeaderScroll = updateHeader;
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const menu = document.querySelector('.menu-toggle');
  const nav = byId('main-nav');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? (currentLanguage === 'ar' ? 'أغلق القائمة' : currentLanguage === 'en' ? 'Close menu' : 'Menüyü kapat') : (currentLanguage === 'ar' ? 'افتح القائمة' : currentLanguage === 'en' ? 'Open menu' : 'Menüyü aç'));
    nav.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menu?.setAttribute('aria-expanded', 'false');
  }));
  document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => {
    currentLanguage = button.dataset.language;
    render();
  }));

  const pickup = byId('pickup-date');
  const dropoff = byId('return-date');
  pickup.addEventListener('change', () => { dropoff.min = pickup.value || pickup.min; });
  dropoff.addEventListener('change', () => {
    if (pickup.value && dropoff.value < pickup.value) dropoff.setCustomValidity(currentLanguage === 'ar' ? 'يجب أن يكون تاريخ التسليم بعد تاريخ الاستلام.' : currentLanguage === 'en' ? 'Return date must be on or after the pick-up date.' : 'Teslim tarihi alış tarihinden önce olamaz.');
    else dropoff.setCustomValidity('');
  });
  byId('booking-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    selectedCategory = byId('vehicle-category').value;
    byId('fleet-grid').innerHTML = VEHICLES.filter((car) => selectedCategory === 'all' || car.category === selectedCategory).map(renderCarCard).join('') || `<p class="empty-results">${lang().noCars}</p>`;
    document.querySelectorAll('#fleet-grid [data-reveal]').forEach((item) => item.classList.add('is-visible'));
    document.querySelector('#fleet').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .1 });
    revealTargets.forEach((item) => observer.observe(item));
  } else {
    revealTargets.forEach((item) => item.classList.add('is-visible'));
  }
}

document.documentElement.classList.add('js-ready');
render();
