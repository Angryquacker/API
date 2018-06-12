const express = require('express');
const app = express();
const port = 8080;
let para = "Outsize paphos unrelinquishing rememberer convenient paranagu subpar interiorize flyweight amberley unpresumptive valenciennes undilatory senti Waler remodelled homeostatic leavis trone khnum ruer unlocalize holster setting betulaceous greathearted transferase choregraphy Xylophagous readier unimportant pilch phonogramically subformation relapser mundify myelinic primogenitureship kuntsevo bagful cryptozoic customshouse Manasquan modificand meaningless rentability rowan aspergilla uncomposed paginating dowagerism superassertion administrating numberplate diapir nonstick Kendoist supplanter aelbert detainer hydrocellulose galeate sulphuration compunctiously ern garish visionally turdiform entrapment prof"
let words = para.split(" ");


app.get('/', (req, res, next) => {
    let item = words[Math.floor(Math.random() * words.length)];
    console.log(item);
    res.json({"word": item});    
});

app.listen(port, () => {
    console.log("Success");
});