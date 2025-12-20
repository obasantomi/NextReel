export interface FetchReviewResponse<T> {
  id: number;
  total_pages: number;
  page: number;
  results: T[];
}

export interface Review {
  author: string;
  content: string;
  author_details: {
    name?: string;
    username?: string;
    avatar_path: string;
    rating?: number;
  };
}
