function combinations(variants) {
  return (function recurse(keys) {
    if (!keys.length) return [{}];
    let result = recurse(keys.slice(1));
    return variants[keys[0]].reduce(
      (acc, value) =>
        acc.concat(
          result.map((item) => Object.assign({}, item, { [keys[0]]: value }))
        ),
      []
    );
  })(Object.keys(variants));
}

// Sample data
const array = [{ l: ["v0"] }, { l: ["v0", "v1","v2", "v3"] },{ l: ["v0", "v1"] }];

let variants={}
for (let n=0;n<array.length;n++){
  variants[`layer${n}`]=array[n].l
}
const result = combinations(variants);
console.log(result);
// Result

