export interface Potato {
    id: number;
    national_id: string;
    name: string;
    image: string;
    size: string;
    price: number;
    birth_month: string;
    mbti: string;
    fun_fact?: string;
    favorite_hobby?: string;
    favorite_food?: string;
    strengths?: string[];
    weaknesses?: string[];
}