import React, {Component} from "react"
import propTypes from "prop-types"
// Import React Table



// Table data with styled_components
class FootballTableData extends Component {
    constructor(props)
    {
        super(props)
    }

    componentDidMount()
    {
        const {current, handleBoot, skip} = this.props
        if (current == 0)
        {
            handleBoot(1, skip)
        }
        
    }
    render() 
    {
        const {data} = this.props
        if(data.length == 0) {
            return null;
        }
        return(
            <div className="Table--body">
                {data.map((item,k) => {
                  return(                               
                    <div className="Table--body__row" key={ k }>
                        <div className="Tbody--col__left td">
                            <span className="Table--col__time Table--icon" />
                            {item.time}
                        </div>   
                        <div className="Tbody--col__right td ">
                            {item.home}
                            <span className="Table--col__home Table--icon" />
                        </div>  
                        <div className="Tbody--col__mid col_mid">
                            {item.vs}
                        </div>    
                        <div className="Tbody--col__left td">
                            <span className="Table--col__away Table--icon" />
                            {item.away}
                        </div>                                              
                        <div className="Tbody--col__right td">
                            <span className="Table--col__location Table--icon" />
                            {item.location}
                        </div> 
                        <div className="Tbody--col__more col_more">
                            <a href="#" className="Tbody--more" />
                        </div>
                    </div>
                  )                  
                })}                
            </div>               
        )
    }
}

FootballTableData.propTypes = {
    current: propTypes.number.isRequired,
    handleBoot: propTypes.func.isRequired,
    data: propTypes.array.isRequired
}

export default FootballTableData