const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  console.log('env', env);
  const isProduction = env.production === true;
  // const CSSExtract = new MiniCssExtractPlugin('styles.css');
  // const MiniCssExtractPlugin = new MiniCssExtractPlugin({
  //   filename: "ext-style.css"
  // });
  console.log(isProduction);

  return {
  // mode: "development",
  entry: './src/app.js',
  // entry: './src/playground/advjavascript_examples.js', //K:\ReactCourseProjects\ExpenseNotifyApp\src\playground\advjavascript_examples.js
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      // use: 
      // include: /src/,
      // use: MiniCSSExtract.extract({
      //   use: [
      //     // 'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // })
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }]  
  },
    // devtool : isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devtool : isProduction ? 'source-map' : 'inline-source-map',
    plugins: [
      new MiniCssExtractPlugin( { filename: "ext-style.css"  })
    ],
    devServer : {
        static: {
            directory : path.join(__dirname, 'public')
        },
        historyApiFallback : true
    }
  }
};
