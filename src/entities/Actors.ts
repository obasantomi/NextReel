export interface FetchCastsResponse<T> {
  id: number;
  casts: T[];
}

export interface Cast {
  name: string;
  profile_path: string;
  character: string;
}
