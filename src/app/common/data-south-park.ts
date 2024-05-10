export interface DataSouthPark {
    data: Personaje[];
    links: Links;
    meta: Meta;
  }
  
  export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
  
  export interface Link {
    url?: string;
    label: string;
    active: boolean;
  }
  
  export interface Links {
    first: string;
    last: string;
    prev?: any;
    next: string;
  }
  
  export interface Personaje {
    id: number;
    name: string;
    age?: number;
    sex: string;
    hair_color?: string;
    occupation?: string;
    grade?: string;
    religion?: string;
    voiced_by?: any;
    created_at: string;
    updated_at: string;
    url: string;
    family: string;
    relatives: Relative[];
    episodes: string[];
  }
  
  export interface Relative {
    url: string;
    relation: string;
  }
