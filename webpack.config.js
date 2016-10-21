module.exports={
    entry:[
        './src/app.js'
    ],
    output:{
        path:'dist',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            { test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel',query: {presets: ['es2015','react','react-hmre'],}}
        ]
    }    
};