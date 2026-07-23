export interface HeroStat {
  end: number;
  suffix: string;
  label: string;
}

export interface GlobeMarker {
  location: [number, number]; // [lat, long]
  size: number;
}

export interface PersonNodeData {
  id: string;
  name: string;
  designation: string;
  location?: string;
  avatarUrl: string;
  initials?: string;
  position: {
    left: string;
    top: string;
  };
  delay: number;
  isOnline?: boolean;
}
