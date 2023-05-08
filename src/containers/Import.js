import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes, deleteMake } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars,
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: (index) => dispatch(fetchMakes(index)),
        deleteMake: (index) => dispatch(deleteMake(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)