import { connect } from 'react-redux';
import SearchForm from '../Components/SearchForm';
import {changePageSize,changePageContentType,changePage} from "../Store/ActionCreators/UI"


const mapStateToProps = (state) => ({
    contentType: state.UIReducer.pageContentType,
});

const mapDispatchToProps = {
    changePageSize: changePageSize, //
    changePageContentType: changePageContentType,
    changePage: changePage
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

//TODO
