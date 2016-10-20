// module.exports={
//     entry:{
//         javascript:'./src/app.js',
//         html:'./index.html'
//     },
//     output:{
//         path:__dirname+'./dist',
//         filename:'bundle.js'
//     },
//     module:{
//         loaders:[
//             { test: /\.html$/,loader: "file?name=[name].[ext]"},
//             { test: /\.jsx?$/,exclude: /node_modules/,loader: ['react-hot','babel-loader']}
//         ]
//     }
// };