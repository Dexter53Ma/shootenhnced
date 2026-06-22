export interface HeroSlide {
  id: number;
  subtitle: string;
  propertyName?: string;
  imageUrl: string;
  link: string;
}

export interface Property {
  id: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  imageUrl: string;
  logoUrl: string;
  link: string;
  units?: string;
  features?: string[];
}

export interface Region {
  id: string;
  name: string;
  label: string;
  href: string;
}

export interface Award {
  id: string;
  name: string;
  imageUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  uaeEmail: string;
  cbiEmail: string;
  phone: string;
  whatsapp: string;
}
