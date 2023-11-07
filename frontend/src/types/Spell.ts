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
