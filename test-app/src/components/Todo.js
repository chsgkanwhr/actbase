import React, { Component } from 'react'

class Todo extends Component{
    
    todoList = [];

    state = {
        todoList:this.todoList
        ,doname:""
        ,number:this.todoList.length+1
    }

    doname = (eventObj)=>{
        let newDo = eventObj.target.value;
        this.setState(
            {doname:newDo}
        );
    }

    add_do = ()=>{
        let {doname, todoList, number} = this.state;
        const new_todoList = 
        todoList.concat({number:number, doname:doname});

        this.setState({todoList:new_todoList})
        this.setState({number:number+1});
        this.setState({doname:''});
        this.render();
    }

    delete_do = (number)=>{
        const todoList = this.state.todoList;
        const new_todoList = todoList.filter(todoList=>todoList.number !== number);
        this.setState({todoList : new_todoList});
        
    }

    render(){        
        /* 번호를 역순으로 주셔서 맵을 역순으로 받음 */      
        const todoList = this.state.todoList.reverse().map(
            (todoList)=>
                <li key={todoList.doname}>
                    {/* 그다음 li css대신 넘버를 표기  */} 
                    {todoList.number} {todoList.doname}
                    <button value={todoList.number} onClick={()=>{this.delete_do(todoList.number);}}>del</button>
                </li>
        );
        const olStyle={
            listStyleType: "none"
        }


        return(
            <center> 
            <table>
                <tr>
                    <td>
                        <h2>ToDo</h2>
                        <input type='text'
                            onChange={this.doname}
                        />&nbsp;
                        <button onClick={this.add_do}> ADD </button>
                        <ol style={olStyle}>
                            {todoList}
                        </ol>
                    </td>
                </tr>
            </table>
        </center>
        );
    };
}

export default Todo;