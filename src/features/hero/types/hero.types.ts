export interface HeroStat {
  end: number;
  suffix: string;
  label: string;
}

export interface GlobeMarker {
  location: [number, number]; // [lat, long]
  size: number;
}

export type NetworkNodeType = "user" | "job" | "company" | "product";

export interface BaseNetworkNodeData {
  id: string;
  type: NetworkNodeType;
  position: {
    left: string;
    top: string;
  };
  delay: number;
}

export interface UserNodeData extends BaseNetworkNodeData {
  type: "user";
  name: string;
  designation: string;
  location: string;
  avatarUrl: string;
  initials?: string;
  isOnline?: boolean;
}

export interface JobNodeData extends BaseNetworkNodeData {
  type: "job";
  jobTitle: string;
  companyName: string;
  location: string;
  salaryRange: string;
  jobType: string;
  avatarUrl?: string;
  badgeText?: string;
}

export interface CompanyNodeData extends BaseNetworkNodeData {
  type: "company";
  companyName: string;
  industry: string;
  location: string;
  employeesCount: string;
  avatarUrl?: string;
  isVerified?: boolean;
}

export interface ProductNodeData extends BaseNetworkNodeData {
  type: "product";
  productName: string;
  category: string;
  price: string;
  rating: string;
  avatarUrl?: string;
  tagline?: string;
}

export type NetworkNodeData =
  | UserNodeData
  | JobNodeData
  | CompanyNodeData
  | ProductNodeData;

// For backwards compatibility
export type PersonNodeData = NetworkNodeData;

