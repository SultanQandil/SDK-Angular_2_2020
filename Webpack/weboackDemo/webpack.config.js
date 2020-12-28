const path = require('path') ;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = 
{
    entry :"./src/index.js",
    output:
    {
        filename:"bundle[contenthash].js",
        path : path.resolve(__dirname,"./destantion")

    },
    mode :'none', 
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),] ,
        plugins: [
            new HtmlWebpackPlugin({
              title: 'Output Management',
            }),
          ],
          devServer: {
            contentBase: path.join(__dirname, 'dist'),
            index : 'index.html'}
   
}
