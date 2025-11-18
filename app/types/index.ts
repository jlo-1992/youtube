import type { House } from '~/types/character';

export interface Tag {
  tag: House | 'all';
  tagName: string;
}
