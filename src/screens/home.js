import React, { Component } from 'react';
import loading from '../loading.gif';

export default class Home extends Component {
    state={
        users:[],
        loading:false
    }
    constructor(){
        super();
        this.getProfileData=this.getProfileData.bind(this);
    }
    componentDidMount(){
        this.getUser();
    }
    getUser(){
        this.setState({
            loading:true
        })
        fetch(`https://api.github.com/users`).then(res=>res.json()).then(
            datas=>{
                console.log(datas)
                this.setState({
                    users:datas,
                    loading:false
                })
            },
            
        )
    }
    getProfileData(e){
        this.props.history.push('/profile',{"username":e});
        console.log(e);
    }
  render() {
    return (
        <div>
            {this.state.loading?<Loading/>:
            <div className='home'>
            {console.log("state",this.state.users)}
              {this.state.users.map(user=><UserList user={user} click={this.getProfileData}/>)}
            </div>
        }
      
      </div>
    )
  }
}
const UserList=(props)=>{
    return( 
        <div className="userlist" onClick={()=>props.click(props.user.login)}>
            <img src={props.user.avatar_url} width="100%"/>
            <div className="username">
            {props.user.login}
            </div>
        </div>
    )
}

const Loading=()=>{
    return(
        <div className="loading">
            <img src={loading}/>
        </div>
    )
}

