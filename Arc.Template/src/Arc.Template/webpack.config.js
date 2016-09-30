module.exports = {
    entry: "./wwwroot/app/features/questions/factory.js",
    output: {
        path: __dirname + '/bundles/',
        filename: "questions.bundle.js"
    },
    module: {
        //loaders: [
        //    { test: /\.css$/, loader: "style!css" }
        //]
    }
};