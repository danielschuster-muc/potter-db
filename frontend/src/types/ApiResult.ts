import Book from "./Book";
import Chapter from "./Chapters";
import Character from "./Character";
import Movie from "./Movie";
import Potion from "./Potion";

type PotterType = Book | Movie | Chapter | Character | Potion;

export interface ApiResult {
  data: PotterType[];
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
