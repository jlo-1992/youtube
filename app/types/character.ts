export interface CharactersInfo {
  id: string;
  name: string;
  house: House;
  ancestry: string;
  wand: { core: string };
  image: string;
}

export type House = 'Gryffindor' | 'Ravenclaw' | 'Hufflepuff' | 'Slytherin';
