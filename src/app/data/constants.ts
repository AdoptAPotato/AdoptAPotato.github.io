// Look
export const SIZES = [
  { width: 4, code: 'XS' }, 
  { width: 5, code: 'S' },
  { width: 6, code: 'M' },
  { width: 7, code: 'L' },
  { width: 8, code: 'XL' }
]


// Personality
export const MBTI_TYPES = [
    { code: 'INTJ', name: 'معمار', color: '#5c4dce' },
    { code: 'INTP', name: 'متفکر', color: '#5c4dce' },
    { code: 'ENTJ', name: 'فرمانده', color: '#5c4dce' },
    { code: 'ENTP', name: 'مجادل', color: '#5c4dce' },

    { code: 'INFJ', name: 'حامی', color: '#3fc756' },
    { code: 'INFP', name: 'میانجی', color: '#3fc756' },
    { code: 'ENFJ', name: 'قهرمان', color: '#3fc756' },
    { code: 'ENFP', name: 'کاوشگر', color: '#3fc756' },

    { code: 'ISTJ', name: 'بازرس', color: '#5fafec' },
    { code: 'ISFJ', name: 'مدافع', color: '#5fafec' },
    { code: 'ESTJ', name: 'مدیر', color: '#5fafec' },
    { code: 'ESFJ', name: 'سفیر', color: '#5fafec' },

    { code: 'ISTP', name: 'ماهر', color: '#e6d433' },
    { code: 'ISFP', name: 'ماجراجو', color: '#e6d433' },
    { code: 'ESTP', name: 'کارآفرین', color: '#e6d433' },
    { code: 'ESFP', name: 'سرگرم‌کننده', color: '#e6d433' }
];

export const ELEMENTS: { [key: string]: { name: string; img: string; texture_img:string; color: string } } = {
    'fire': { name: 'آتش', img: 'fire.png', texture_img: 'fire.jpg', color: '#f7621e' },
    'earth': { name: 'خاک', img: 'earth.png', texture_img: 'earth.jpg', color: '#3c805b' },
    'air': { name: 'هوا', img: 'air.png', texture_img: 'air.jpg', color: '#7472c5' },
    'water': { name: 'آب', img: 'water.png', texture_img: 'water.jpg', color: '#208aba' }
};

export const MONTHS = [
    { name: 'فروردین', element: 'fire' },
    { name: 'اردیبهشت', element: 'earth' },
    { name: 'خرداد', element: 'air' },
    { name: 'تیر', element: 'water' },
    { name: 'مرداد', element: 'fire' },
    { name: 'شهریور', element: 'earth' },
    { name: 'مهر', element: 'air' },
    { name: 'آبان', element: 'water' },
    { name: 'آذر', element: 'fire' },
    { name: 'دی', element: 'earth' },
    { name: 'بهمن', element: 'air' },
    { name: 'اسفند', element: 'water' }
];


// Pricing
export const BASIC_COST: Record<number, number> = {
    4: 300,
    5: 325,
    6: 350,
    7: 375,
    8: 400
};

export const READY_ITEM_COST = 100;

export const ONE_CUSTOM_COST = 150;
export const TWO_CUSTOM_COST = 125;
export const THREE_PLUS_CUSTOM_COST = 100;


// TEMPORARILY! REMOVE LATER
export const POTATOES = [
    {
      id: 1,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ',
      funFact: 'همه فکر می‌کنن که در حال یه مدیتیشن دائمیه، اما در حقیقت خسته‌تر از اونیه که بخواد تکون بخوره! جوونیش پانک بوده.',
      favoriteHobby: 'مدیتیشن',
      favoriteFood: 'بادوم',
      strengths: ['خرد', 'صبر', 'مقاومت'],
      weaknesses: ['همیشه خستست']
    },
    {
      id: 2,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی نابخرد',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'فروردین',
      mbti: 'ESFP'
    },
    {
      id: 3,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خفن',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'تیر',
      mbti: 'INTJ'
    },
    {
      id: 4,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی ایرادی',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'خرداد',
      mbti: 'ISTJ'
    },
    {
      id: 5,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ'
    },
    {
      id: 6,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی نابخرد',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'فروردین',
      mbti: 'ESFP'
    },
    {
      id: 7,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ'
    }
  ]
