import React, { Component } from 'react';
import {Parent, Soon ,Icon1,Head ,Parag,Icon2 } from '../Style/HoverStyle.js';
import axios from 'axios';

class Hovers extends Component {
    state={
        posts:[]
    }
    
    componentDidMount(){
        axios.get('js/data.json')
        .then(res=>{
            this.setState({
                posts:res.data.posts
            })
        })
    }

    render() {
        const {posts}=this.state;
        const theposts=posts.map(post=>{
            return(
                <Parent >

                    <div className="col-4 " key={post.id}>
                        <Soon>
                            <Icon1 className={post.icons}></Icon1>
                            <Head>{post.title}</Head>
                            <Parag>{post.body}</Parag>
                            <Icon2 className={post.direct}></Icon2>
                        </Soon>
                    </div>

                </Parent>
            )
        })

        return (
            <div className="container">
                <div className="row">
                  {theposts}
                </div>
            </div>
        )
    }
}

export default Hovers
