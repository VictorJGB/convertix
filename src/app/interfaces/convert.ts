export default interface ConvertResponse {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}