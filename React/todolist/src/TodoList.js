import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello!!!',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div><input value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                    <button onClick={this.handleBtnClick}>提交</button></div>
                <ul>
                    {
                        this.getTodoItem()
                    }

                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    <TodoItem key={index} content={item} index={index}
                        deleteItem={this.handleItemDelete}
                    />
                </div>


            )
        })

    }
    handleInputChange(e) {
        //新版
        const value = e.target.value
        this.setState(() => ({

            inputValue: value
        }
        )
        )


        //改变input框数据
        // this.setState({
        //     inputValue: e.target.value
        // })
        // console.log(e.target.value);
    }
    // 鼠标绑定事件
    handleBtnClick() {
        //变成函数形式
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''

        }));

        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''

        // })

    }
    handleItemDelete(index) {
        //变成函数形式
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        })

        // console.log(index);
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list
        // })

    }
}

export default TodoList;