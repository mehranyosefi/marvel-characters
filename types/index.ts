export interface CharacterInterface {
  id: string | number;
  comics: object;
  description: string;
  modified: string;
  name: string;
  resourceURI: object;
  series: object;
  stories: object;
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: object[];
}

export interface DataPaginationInterface {
  count: number;
  limit: number;
  offset: number;
  results: CharacterInterface[];
  total: number;
}
