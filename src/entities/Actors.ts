export interface FetchCastsResponse<T> {
  id: number;
  cast: T[];
  crew: crew[];
}

export interface Cast {
  name: string;
  profile_path: string;
  character: string;
}

interface crew {
  profile_path: string;
  original_name: string;
  job: string;
}
