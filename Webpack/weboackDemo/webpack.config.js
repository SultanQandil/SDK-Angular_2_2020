const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
    entry :"./src/index.js" ,
    output : { 
        filename :"bundel.[contenthash].js" ,
        path :path.resolve(__dirname,"./destantion")
    } ,
    mode: 'none',
    module :{
        rules :[
        {
            test : /\.css$/,
            use:[
                'style-loader' , 'css-loader'

            ]
        }
        ]
    } ,
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }) ,
        new HtmlWebpackPlugin({filename :"index.html",title: 'Output Management'})] ,
    devServer: {
        contentBase:  './destantion',
     
       },
       devtool: 'inline-source-map',

      
}