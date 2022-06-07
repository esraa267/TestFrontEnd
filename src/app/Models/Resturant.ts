export interface Restaurant {
  address: string;
  description: string;
  governorate: { name: string };
  id: number;
  logo: string;
  name: string;
  rate: number;
  rate_count: number;
  region: { name: string };
}
