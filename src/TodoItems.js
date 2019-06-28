import React,{ Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component{
   constructor(props){
       super(props);

       this.state = {mark: false}

       this.createTasks = this.createTasks.bind(this);
   }

   markTask(){
       if(this.mark==false){
           this.mark = true;
       }else{
           this.mark = false;
       }
   }
   
    createTasks(item){
        return <div className="todo">
        <div className="mark"></div> 
        
        <li className="li" onClick={() => this.delete(item.key)}
        key={item.key}>{item.text}
        </li>
        </div>
    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
            <FlipMove className="flip" duration={250} easing="ease-out">
                {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;