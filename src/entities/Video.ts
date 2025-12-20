export interface Video {
  key: string;
  name: string;
  type: string;
  id: string;
  official: boolean;
}

export interface FetchVideosResponse<T> {
  id: number;
  results: T[];
}
