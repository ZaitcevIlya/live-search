import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import User from './../components/User';
import Page from './../components/Page';
import * as pageActions from './../actions/PageActions';

class App extends Component {
    render() {
        const {questions} = this.props;
        const {user, page} = this.props;
        const {getPhotos} = this.props.pageActions;
        return (
            <div>
                <div className="search__wrapper">
                    <div className="search__search-input">
                        <input type="search"/>
                        <button>Поиск</button>
                    </div>
                    <div className="search__search-output">

                    </div>
                </div>
                <User name={user.name}/>
                <Page year={page.year} photos={page.photos} getPhotos={getPhotos} fetching={page.fetching}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
