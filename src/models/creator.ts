export interface Item {
  thumbnail: string;
  mask?: string;
  shadow?: string;
  fixed?: string;
  colors?: string[];
  group_id: number;
}

export interface Category {
  name: string;
  image: string;
  nullable: boolean;
  items: Item[];
}

export interface EquippedItem {
  item: Item;
  selectedColor: string | null;
}