export type SceneData = { id: number; start: number; end: number; name: string };
export const scenes: SceneData[] = [
  {
    "id": 1,
    "start": 0.0,
    "end": 3.9,
    "name": "Hook"
  },
  {
    "id": 2,
    "start": 3.9,
    "end": 10.6,
    "name": "GLP-1"
  },
  {
    "id": 3,
    "start": 10.866,
    "end": 16.1,
    "name": "Appetite & nutrients"
  },
  {
    "id": 4,
    "start": 16.1,
    "end": 22.666,
    "name": "Skipping meals"
  },
  {
    "id": 5,
    "start": 22.666,
    "end": 25.066,
    "name": "Snacks"
  },
  {
    "id": 6,
    "start": 25.233,
    "end": 29.1,
    "name": "Undernourished"
  },
  {
    "id": 7,
    "start": 29.233,
    "end": 31.566,
    "name": "Protein"
  },
  {
    "id": 8,
    "start": 31.833,
    "end": 36.7,
    "name": "Nutrients"
  },
  {
    "id": 9,
    "start": 36.7,
    "end": 44.7,
    "name": "Symptoms"
  },
  {
    "id": 10,
    "start": 44.833,
    "end": 48.466,
    "name": "Every bite counts"
  },
  {
    "id": 11,
    "start": 48.633,
    "end": 53.133,
    "name": "Eat the rainbow"
  },
  {
    "id": 12,
    "start": 53.366,
    "end": 59.8,
    "name": "Closing"
  }
] as SceneData[];
export const secondsToFrames = (sec: number) => Math.round(sec * 30);
