export default interface Potion {
  id: string;
  type: string;
  attributes: {
    slug: string;
    characteristics: string;
    difficulty: string;
    effect: string;
    image: string;
    inventors: string;
    ingredients: string;
    manufacturers: string;
    name: string;
    side_effects: string;
    time: string;
    wiki: string;
  };
}

export interface PotionResponse {
  data: Potion[];
  meta: {
    pagination: {
      current: number;
      first: number;
      prev: number;
      next: number;
      last: number;
      records: number;
    };
  };
  links: {
    first: string;
    last: string;
    next: string;
    prev: string;
  };
}
