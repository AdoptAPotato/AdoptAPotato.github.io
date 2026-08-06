// Look
export const WIDTHS = [4, 5, 6, 7, 8]


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