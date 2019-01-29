import React, {Component} from "react";
import propTypes from "prop-types"

class Pagination extends Component {
    constructor(props)
    {
        super(props)
    }
    render()
    {
        const {total, current, dropDownBoxId, dropDownBox, limitChange, handlePage, limit, skip} = this.props
        
        return(
            
            <div className="Pagination">    
                <div className="Pagination--current">       
                    <p>Page</p>
                    <div className="Pagination--number">
                        {current}
                    </div>   
                    <p>of</p>
                    <div className="Pagination--current__all">
                        <p>{total}</p> 
                    </div>
                </div>
                <div className="Pagination--row_number">
                    <select className="Pagination--selectLimit"
                        value= { dropDownBoxId }
                        onChange = { e => limitChange(e.target.value) }
                    >
                        {dropDownBox.map((item,k) => {
                            return(
                                <option
                                    value={ k }
                                    key ={ k } 
                                >
                                    {item}
                                </option>
                            )
                        })}
                    </select> 
                </div>
                <div className="Pagination--nav">       {/* styled_component div for next; prev;    */}
                    <a href="/" onClick = { e => handlePage(e, "prev", skip, limit, total) } className="Pagination--prev" />
                    <a href="/" onClick = { e => handlePage(e, "next", skip, limit, total) } className="Pagination--next"/>
                    {/* styled_component button/link for next;    */}
                </div>  
            </div>
        )
    }
}

Pagination.propTypes = {
    total: propTypes.number.isRequired,
    current: propTypes.number.isRequired
}

export default Pagination