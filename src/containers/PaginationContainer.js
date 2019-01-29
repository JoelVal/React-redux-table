import {connect} from  'react-redux'
import {fetchPage, changeLimit, switchPage} from '../actions'
import Pagi from '../components/Pagination'


const mapStateToProps = (state) => {

    return {
        total: state.pagingReducer.total,
        current: state.pagingReducer.current,
        skip: state.pagingReducer.skip,
        dropDownBox: state.pagingReducer.dropDownBox,
        dropDownBoxId: state.pagingReducer.dropDownBoxId,
        limit: state.pagingReducer.limit
        
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        limitChange: (dropDownBoxId) => {
            //let value = e.target.value;
            dispatch(changeLimit(dropDownBoxId))
            dispatch(fetchPage())
            
            
        },
        handlePage: (e, direction, skip, limit, total) => {
            e.preventDefault()
            let newSkip = 0
            let newTotal = total - limit
            if (direction == "prev"){
                if (skip >= limit) newSkip = skip - limit
            } else {
                newSkip = skip + limit
                if (newSkip >= newTotal) newSkip = newTotal
            }
            const pageNumber = Math.round(newSkip / limit) + 1
            dispatch(switchPage(newSkip, pageNumber))
            dispatch(fetchPage())
        }
    }
}

const PagiContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagi)

export default PagiContainer