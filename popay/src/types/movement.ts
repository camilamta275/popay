export type MovementType = 'entrada' | 'saida';

export interface Movement {
  value: number;
  accountId: string;
  description: string;
  category: string;
  type: MovementType;
}