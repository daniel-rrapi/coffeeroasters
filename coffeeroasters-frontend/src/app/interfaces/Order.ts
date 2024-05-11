import { Address } from './Address';
import { Coffee, Option } from './Coffee';
import { User } from './UserData';

export interface Order {
  _id: string;
  user: User;
  address: Address;
  coffeeSelections: CoffeeSelection[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export interface CoffeeSelection {
  coffeeField: Coffee;
  selectedOption: Option;
  _id: string;
}
