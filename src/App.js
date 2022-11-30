import React, {Component} from "react";
import './App.css';

export default class App extends Component {

    getStyle = {
        border: "1px solid black",
        marginBottom: "10px"
    }

    handleSubmit = (event) =>{
        //form 주소 이동 방지
        event.preventDefault();

        let value = this.state.value;

        // 객세 생성
        let newObject = {
            id: Date.now(),
            message: value
        }

        this.setState({objects: [...this.state.objects, newObject], value: ""});
        console.log("status ", this.state);
    };

    keyChange = (event) =>{
        let eventKey = event.target.value;
        this.setState({value: eventKey});
    }

    delete = (id) => {
        let filterObjects = this.state.objects.filter(object => object.id !== id);
        this.setState({objects: filterObjects});
    }

    state = {
        objects :[
            {
                id: "1",
                message: "내용",
            },
            {
                id: "2",
                message: "내용2",
            },
        ],
        value:""
    };

    render() {
        return (
            <div className="container">
                <div className="items">
                    {this.state.objects.map(item => (
                        <div style={this.getStyle} key={item.id}>
                            ID: {item.id} <button type="button" onClick={() => this.delete(item.id)}>삭제</button> <br/>
                            내용: {item.message}
                        </div>
                    ))}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="메시지를 입력하세요" value={this.state.value} onChange={this.keyChange}/>
                    <button type="submit">저장</button>
                </form>
            </div>
        );
    }
}
