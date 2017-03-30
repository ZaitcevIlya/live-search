import React, {Component, PropTypes} from 'react';

class Page extends Component {
    constructor(props){
        super(props);
        this.onYearButtonClick = this.onYearButtonClick.bind(this);
    }
    onYearButtonClick(e) {
        this.props.getPhotos(+e.target.textContent)
    }
    render() {
        const { year, photos, fetching } = this.props;
        return <div>
            <p>
                <button onClick={this.onYearButtonClick}>2016</button>
                <button onClick={this.onYearButtonClick}>2015</button>
                <button onClick={this.onYearButtonClick}>2014</button>
            </p>
            <h3>{year} year</h3>
            {
                fetching ?
                    <p>Loading...</p>
                    :
                    <p>You have {photos.length} photos.</p>
            }

        </div>
    }
}
Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};

export default Page;
