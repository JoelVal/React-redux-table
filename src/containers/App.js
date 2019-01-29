import {connect} from  'react-redux'
import {fetchPage} from '../actions'
import TableComponent from '../components/TableComponent'


const mapStateToProps = (state) => {

    return {
        total: state.pagingReducer.total,
        current: state.pagingReducer.current
    }
}


const mapDispatchToProps = (dispatch) => {
    
    return {
        onPageClick: (e, pageId) => {
            e.preventDefault()

            dispatch(fetchPage(pageId))
        }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableComponent)

export default App