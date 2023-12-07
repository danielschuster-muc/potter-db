export default interface Movie {
  id: string;
  attributes: {
    slug: string;
    box_office: string;
    budget: string;
    cinematographers: string[];
    directors: string[];
    editors: string[];
    distributors: string[];
    music_composers: string[];
    poster: string;
    producers: string[];
    rating: string;
    release_date: string;
    running_time: string;
    screenwriters: string[];
    summary: string;
    title: string;
    trailer: string;
    wiki: string;
  };
}
