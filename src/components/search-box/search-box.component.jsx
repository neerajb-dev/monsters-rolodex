import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        return (

            <input
                type='search'
                placeholder={this.props.placeholder}
                className={`search-box ${this.props.className}`} // string interpolation `string ${}`
                onChange={this.props.onChangeHandler}
            />

        )
    }
};

export default SearchBox;