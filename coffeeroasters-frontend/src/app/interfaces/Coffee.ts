export interface Coffee {
  _id: string;
  name: string;
  title: string;
  options: Option[];
  __v: number;
}

export interface Option {
  _id: string;
  name: string;
  description: string;
  __v: number;
}
