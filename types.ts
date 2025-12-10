export interface VisaPolicy {
  country_code: string;
  country_name: string;
  requirement: string;
  duration: string;
  apply_link: string;
  notes: string;
  transit_policy?: string;
}

export interface CityTransport {
  id: string;
  name_en: string;
  name_zh: string;
  airports: {
    name: string;
    code: string;
    transport_options: {
      type: 'Metro' | 'Taxi' | 'Bus' | 'Maglev' | 'Train';
      description: string;
      cost_estimate: string;
    }[];
  }[];
}

export interface IchItem {
  id: string;
  name_en: string;
  name_zh: string;
  latitude: number;
  longitude: number;
  category: string;
  description_en: string;
}

export type Language = 'en' | 'zh';

export interface Translations {
  [key: string]: string;
}