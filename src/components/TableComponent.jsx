import React, {Component} from "react"

import FootballTableDataContainer from "../containers/FootballTableDataContainer"
import FootballTableHeader from "./FootballTableHeader"
import Pagination from "../containers/PaginationContainer"
import "../Style/index.css"
// Import React Table


export default function TableComponent({total, current})
{
  return (
    <div className="Main">
      <div className="Table--block">
        <div className="Table--name">Upcoming</div>
        <div className="Table--content">
          <FootballTableHeader />
            <FootballTableDataContainer />        
        </div> 
        <Pagination />    
      </div> 
    </div> 
  )
}


