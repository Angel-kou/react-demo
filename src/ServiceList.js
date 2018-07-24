import React, { Component } from 'react';
import request from './request'

class ServiceList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                list: [],
                showList:true
            };
        }


        componentDidMount()
        {
            console.log(111)
            // fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
            //     .then((response) => response.json())
                request().then((json)=>{
                    console.log(json)
                    this.setState({
                        list: json.items.slice(0, 10)
                    });
                });
        }

        render()
        {
            return (
                <div>
                    {
                        this.state.showList == true && this.state.list.map(item => {
                            return <li key={item.id}>{item.description}</li>
                        })
                    }
                </div>

            )
        }
}

export default ServiceList;