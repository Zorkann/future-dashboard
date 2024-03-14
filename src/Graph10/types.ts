type Point = { coordinates: [number, number]; value: number };

type Marker = {
  label: string;
  points: Array<Point>;
  value: number;
};

export type Graph10Data = {
  markers: {
    value: number;
    data: Array<Marker>;
  };
};
