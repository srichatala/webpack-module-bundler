import React from 'react';

export default class Root extends React.Component{
    render(){
        return(
            <div className="container"> 
                 <div className="row">
                    <div className="col-xs-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}