import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import webpack from 'webpack'

const configuration: webpack.Configuration = {
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: [
          'ts-loader'
        ],
        exclude: [
          /node_modules\/(?!lit-element)/
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}

export default configuration
