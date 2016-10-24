
var config={
    entry:[
        './src/app.jsx'
    ],
    output:{   
        path:'dist',     
        filename:'bundle.jsx'
    },
    module:{
        loaders:[
            { test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel',query: {presets: ['es2015','react'],}}
        ]
    }    
};

module.exports = config;