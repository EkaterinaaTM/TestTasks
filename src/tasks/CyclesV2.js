import React, {Component} from 'react';

class CyclesV2 extends Component {
    state = {
        hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ]
    };
    render() {
        return (
            <ul>
                {this.state.hrefs.map(item => <li><a href={item.href}>  {item.text}  </a></li>)}
            </ul>
        )
    }
}

export default CyclesV2;