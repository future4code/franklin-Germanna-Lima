import styled from "styled-components";
import React from "react";
import SingUpPage from "./components/SingUpPage";
import User from "./components/Users";

App=styled.div`
  font-family: sans-serif;
  text-align: center;
`
export default class App extends React.Component{
  state={
    currentPage:"signUp"
  };
  changePage=()=>{
    if (this.state.currentPage === "signUp"){
      this.setState({currentPage:"users"});
    }else{
      this.setState({currentPage:"signUp"});
    }
  };
  render(){
    return(
      <div>
        <button onClick={this.changePage}>Trocar de Tela</button>
        {this.state.currentPage === "signUp"? <SingUpPage/>:<User/>}
      </div>
    )
  }
}