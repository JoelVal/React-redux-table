import React, {Component} from "react";


class FootballTableHeader extends Component {
    
    render() {
        return(
            <div className="Table--head">
                <div className="Table--head__row">
                    <div className="THead--col__time th THead--col__left">Time</div>
                    <div className="THead--col__home th THead--col__right">Home</div>
                    <div className="THead--col__mid col_mid"> </div>
                    <div className="THead--col__away th THead--col__left">Away</div>
                    <div className="THead--col__location th THead--col__right">Location</div>
                    <div className="THead--col__more col_more"></div>
                </div>
           </div>          
        )
    }
}

export default FootballTableHeader