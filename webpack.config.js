
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
            // { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel',query: {presets: ['es2015','react','react-hmre'],}}
        ]
    }    
};

module.exports = config;