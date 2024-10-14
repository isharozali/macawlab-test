export interface IComment {
  id: number;
  content: string;
  userId: number;
  parentId?: number;
  depth: number;
  name: string;
}
