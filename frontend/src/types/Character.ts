export default interface Character {
  id: string;
  attributes: {
    slug: string;
    alias_names: string[];
    animagus: string | null;
    blood_status: string | null;
    boggart: string | null;
    born: string | null;
    died: string | null;
    eye_color: string | null;
    family_members: string[];
    gender: string | null;
    hair_color: string | null;
    height: string | null;
    house: string | null;
    image: string | null;
    jobs: string[];
    marital_status: string | null;
    name: string;
    nationality: string | null;
    patronus: string | null;
    romances: string[];
    skin_color: string | null;
    species: string | null;
    titles: string[];
    wands: string[];
    weight: string | null;
    wiki: string;
  };
}

export interface CharactersResponse {
  data: Character[];
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
