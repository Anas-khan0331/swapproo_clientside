export type Review = {
  id: number;
  name: string;
  date: string;
  verified: boolean;
  rating: number;
  text: string;
  hasMedia: boolean;
  videoIndex?: number;
  avatar: number;
};

export type RatingBar = {
  stars: number;
  value: number;
};
