export interface CharactersInfo {
  id: string;
  name: string;
  house: House;
  ancestry: string;
  yearOfBirth?: number;
  image?: string;
}

export type House = 'Gryffindor' | 'Ravenclaw' | 'Hufflepuff' | 'Slytherin';
