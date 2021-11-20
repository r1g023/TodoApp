export function increment() {
  const fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);
  return fourdigitsrandom;
}

export const noteList = [
  {
    id: 1,
    title: "first note",
    body: "my first posted note",
  },
];
