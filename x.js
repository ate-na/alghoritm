const array = [{ l: ["v0", "v1"] }, { l: ["v0", "v1"] }, { l: ["v0", "v1"] }];
const temp = [{ l: ["v0", "v1"] }, { l: ["v0", "v1"] }, { l: ["v0", "v1"] }];
let x = [
  { layer2: "v0", layer1: "v0", layer0: "v0" },
  { layer2: "v1", layer1: "v0", layer0: "v0" },
  { layer2: "v0", layer1: "v1", layer0: "v0" },
  { layer2: "v1", layer1: "v1", layer0: "v0" },
  { layer2: "v0", layer1: "v0", layer0: "v1" },
  { layer2: "v1", layer1: "v0", layer0: "v1" },
  { layer2: "v0", layer1: "v1", layer0: "v1" },
  { layer2: "v1", layer1: "v1", layer0: "v1" },
];
function p(nlayer, nv) {
  let m = 1;
  let n = 1;
  let possible = 1;
  let y = array[nlayer - 1].l.length ;
  console.log(3333,y)
  for (let i = 0; i < nv; i++) {
    array[nlayer - 1].l.push(`v${y}`);
    y=y+1
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
  console.log(m, n,array,possible);
  for (let h = m; h < possible; h = h + m) {
    for (let p = 0; p < n; p++) {
      let temp = { a: "new" };
      let t;
      //   console.log(x.length);
      for (let r = h + p - 1; r <= x.length; r++) {
        if (!x[r + 1] && r + 1 === x.length) {
          x.push(temp);
          //   console.log(x);
          break;
        }
        t = x[r + 1];
        x[r + 1] = temp;
        temp = t;
        // console.log(x, r);
      }
      if (m + n !== possible) {
        h = h + p;
      }
    }
    h++;
  }
  console.log(possible);
  console.log(x);
}

p(2, 2);
