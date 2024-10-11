console.log("X"+("v".repeat(30))+"X")
for(let i = 0; i < 15; i++) {
    let line = ("X"+(" ".repeat(30))+"X").split("");
    let indexes = Array(Math.floor(Math.random() * 30))
        .fill(0)
        .map(() => (
        Math.floor(Math.random() * 30)
        ))
    for(let j = 0; j < indexes.length; j++) {
        line[1+indexes[j]] = "X";
    }
    console.log(line.join(""));
}
console.log(("X".repeat(32)))