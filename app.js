const array = [
  { l: ["v0"] },
  { l: ["v0", "v1", "v2", "v3"] },
  { l: ["v0", "v1"] },
];
const temp = [
  { l: ["v0"] },
  { l: ["v0", "v1", "v2", "v3"] },
  { l: ["v0", "v1"] },
];
let x = [
  { layer2: "v0", layer1: "v0", layer0: "v0" },
  { layer2: "v1", layer1: "v0", layer0: "v0" },
  { layer2: "v0", layer1: "v1", layer0: "v0" },
  { layer2: "v1", layer1: "v1", layer0: "v0" },
  { layer2: "v0", layer1: "v2", layer0: "v0" },
  { layer2: "v1", layer1: "v2", layer0: "v0" },
  { layer2: "v0", layer1: "v3", layer0: "v0" },
  { layer2: "v1", layer1: "v3", layer0: "v0" },
];
function p(nlayer, nv) {
  let m = 1;
  let n = 1;
  let possible = 1;
  let y = array[nlayer - 1].l.length;
  for (let i = 0; i < nv; i++) {
    array[nlayer - 1].l.push(`v${y}`);
    y = y + 1;
  }
  array.map((el) => {
    possible = possible * el.l.length;
  });
  if (nlayer === array.length) {
    m = temp[nlayer - 1].l.length * 1;
    n = nv;
  } else {
    for (let r = nlayer - 1; r < array.length; r++) {
      m = temp[r].l.length * m;
    }
    for (let r = nlayer; r < array.length; r++) {
      n = temp[r].l.length * n;
    }
    n = n * nv;
  }
  for (let h = m; h < possible; h = m + h) {
    for (let p = 0; p < n; p++) {
      let temp = { a: "new" };
      let t;
      for (q = h + p - 1; q <= x.length; q++) {
        if (!x[q + 1] && q + 1 === x.length) {
          x.push(temp);
          break;
        }
        t = x[q + 1];
        x[q + 1] = temp;
        temp = t;
      }
    }
    h = h + n;
  }
  console.log(x);
}

p(2, 2);
