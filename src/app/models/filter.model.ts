export interface Filter {
  key: string;
  value: { type: string; value: number } | string | string[] | number | boolean;
}
