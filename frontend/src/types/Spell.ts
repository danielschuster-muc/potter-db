export default interface Spell {
  id: string;
  attributes: {
    slug: string;
    category: string | null;
    creator: string | null;
    effect: string | null;
    hand: string | null;
    image: string | null;
    incantation: string | null;
    light: string | null;
    name: string;
    wiki: string;
  };
}

export interface SpellsResponse {
  data: Spell[];
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
