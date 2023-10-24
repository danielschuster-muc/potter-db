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
