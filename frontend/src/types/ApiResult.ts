import Book from "./Book";
import Chapter from "./Chapters";
import Character from "./Character";
import Movie from "./Movie";
import Potion from "./Potion";

interface GenericType {
  type: Book | Chapter | Character | Movie | Potion;
}

export interface ApiResult {
  data: GenericType[];
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
