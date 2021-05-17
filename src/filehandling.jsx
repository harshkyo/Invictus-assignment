import { Component } from 'react';
import Frequency from './frequency.jsx';

class FileHandling extends Component {
    constructor (props) {
        super (props);
        this.state = {content: null};
    }

    fetchFileData = () => {
        fetch( `https://raw.githubusercontent.com/invictustech/test/main/README.md` )
                .then((res) => res.text())
                .then((text) => {
                    this.setState({content: text.toString()
                    .replace(/[^a-zA-Z0-9]/g, " ")
                    .split(" ")
                    });
                })
                return this.state.content;
    }

    componentDidMount() {
        this.fetchFileData();
    }

    render () {
        return (
            <div>
                <h1>{this.props.num.number}</h1>
                <h2>{this.props.num.status}</h2>
                {console.log(this.state.content)}
                <Frequency words = {this.state.content} />
            </div>
            
        );
    };
}

class Inputnumber extends Component {
    constructor (props) {
        super (props);
        this.state = {
            number : '',
            status : 0
        };
    }

    submitNumber = (event) => {
        event.preventDefault();
        this.setState({status: 1});
    }
    changeNumber = (e) => {
        this.setState({number: e.target.value});
        this.setState({status: 0});
    }

    render() {
        const info = {number: this.state.number, status: this.state.status};
        return (
            <div>
                <form onSubmit = {this.submitNumber}>
                    <input type='number' onChange = {this.changeNumber} />
                    <input type='submit' />
                </form>
                <FileHandling num = {info} />
            </div>
        );
    }
}

export default Inputnumber;