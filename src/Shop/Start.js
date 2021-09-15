import React, {Component} from 'react';
import honey from '../Images/honey.jpg';

export class Start extends Component {
    render(){
        return (
            <div className = 'products start'>
                <div>
                    <img src = {honey} alt = ''/>
                </div>
            </div>
        )
    }
}

