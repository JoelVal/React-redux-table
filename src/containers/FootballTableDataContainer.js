import {connect} from  'react-redux'
import {fetchPage, switchPage} from '../actions'
import FootballTableData from '../components/FootballTableData'


const mapStateToProps = (state) => {
    return {
        data: state.pagingReducer.data,
        current: state.pagingReducer.current,
        skip: state.pagingReducer.skip
    }
}


const mapDispatchToProps = (dispatch) => {
    
    return {
        handleBoot: (current, skip) => {
            dispatch(switchPage(skip, current))
            dispatch(fetchPage())
        },
        onPageClick: (e, pageId) => {
            e.preventDefault()

            dispatch(fetchPage(pageId))
        }
    }
}

const FootballTableDataContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FootballTableData)

export default FootballTableDataContainer