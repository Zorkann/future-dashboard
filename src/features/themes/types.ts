import { THEMES } from './const';

export type Theme = (typeof THEMES)[number];

export type GraphState = Record<
  | 'Graph_1'
  | 'Graph_2'
  | 'Graph_3'
  | 'Graph_4'
  | 'Graph_5'
  | 'Graph_6'
  | 'Graph_7'
  | 'Graph_8'
  | 'Graph_9'
  | 'Graph_10',
  boolean
>;
