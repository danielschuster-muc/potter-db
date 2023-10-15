export default interface Chapter {
  id: string;
  attributes: {
    slug: string;
    order: number;
    summary: string;
    title: string;
  };
}
