module.exports={
    entry:[
        './src/app.jsx'
    ],
    output:{
        path:__dirname,        
        filename:'bundle.jsx',
        publicPath:'dist'
    },
    module:{
        loaders:[
            { test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel',query: {presets: ['es2015','react','react-hmre'],}}
        ]
    }    
};