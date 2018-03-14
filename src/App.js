import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer }  from 'mobx-react';

class Comment extends React.Component {
    render() {
        const {comment} = this.props;
        return (
            <div>{comment.text}</div>
        )
    }
}

@observer class App extends Component {
    @observable counter = 0;

    onIncrement = () => {
        this.counter++;
    }

    onDecrement = () => {
        this.counter--;
    }

    render() {

        const comment = {
            author: 'Author',
            text: 'comment text'
        };

        return (
            <div>
                <Comment comment={comment} />
            </div>
        );
    }
}

export default App;
