import express from 'express';

const app = express();

app.use(express.text())

app.post('/', (req, res) => {
    console.log(req.body);
    let world = req.body
        .split("\n")
        .map(x => x.split(""));
    for(let i = 0; i < world.length; i++) {
        let line = world[i]
        for(let j = 0; j < line.length; j++) {
            if(line[j] === "v"){
                if(world[i+1][j] === " "){
                    world[i+1][j] = "v";
                } else if(world[i+1][j] === "X"){
                    for(let k = j; k > 1; k--) {
                        if(line[k] === " "){
                            line[k] = "v";
                        }
                    }
                    for(let k = j+1; k < line.length-1; k++) {
                        if(line[k] === " "){
                            line[k] = "v";
                        }
                    }
                }
            }
        }
    }

    res.send(world.map(x => x.join("")).join(""));
})

app.listen(3000, () => console.log('Server started on port 3000'));