import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        // console.log(this.props);
        // destructuring this.prop
        console.log(this.props.monsters);
        // components re-renders based on two conditions - 1. When setState() gets called  2. When props are updated
        // this is how primarily react determines that you want to re-render because only when these conditions happen that react actually updates the dom and try and see what are these components and what are the new things that we need to return from them 
        console.log('render from CardList'); // thats why this will be called twice
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {
                    monsters.map(monster => {
                        return (
                            <Card monster={monster} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;