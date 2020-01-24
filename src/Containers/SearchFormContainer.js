import { connect } from 'react-redux';
import SearchForm from '../Components/SearchForm';
import {changePageSize,changePageContentType,changePage} from "../Store/ActionCreators/UI"
import {updateFilters} from "../Store/ActionCreators/advertisements"


const mapStateToProps = (state) => ({
    contentType: state.UIReducer.pageContentType,
});

const mapDispatchToProps = {
    changePageSize: changePageSize, //
    changePageContentType: changePageContentType,
    updateFilters: updateFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

//TODO
