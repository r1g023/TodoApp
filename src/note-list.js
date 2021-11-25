export function increment() {
  return shuffle("0123456789".split("")).join("").substring(0, 5);
}
//generate 4 didit number, no repeat
function shuffle(o) {
  for (
    let j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

export const noteList = [
  {
    id: increment(),
    title: "first note",
    body: "my first posted note",
    completed: false,
  },
];
