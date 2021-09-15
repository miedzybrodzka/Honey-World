import React, {Component} from 'react';


export class ActionButton extends Component {
    render(){
        return (
            <button className = {this.props.active? this.props.activeClassName : this.props.className} onClick = {this.props.action} value = {this.props.value} name = {this.props.name} id = {this.props.id} >{this.props.content}</button>
        )
    }
}