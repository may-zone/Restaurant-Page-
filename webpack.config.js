const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports ={
    mode:"development",
    entry:"./src/script.js",
    output:{
        filename : "main.js",
        path : path.resolve(__dirname,"dist"),
        clean:true,
    },
    plugins :[
        new HtmlWebPackPlugin({
            template :"./src/index.html",
        }),
    ],
};