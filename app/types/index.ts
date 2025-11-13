import type { House } from '~/types/character';

export interface tag {
  tag: House | 'all';
  tagName: string;
}
