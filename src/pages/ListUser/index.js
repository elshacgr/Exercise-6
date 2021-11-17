
import React, { Component } from "react";
import Navbar from "../../components/NavBar";


class ListUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.data.map(data => (
          {
            id: `${data.id}`,
            email: `${data.email}`, 
            firstName: `${data.first_name}`,
            lastName: `${data.last_name}`,
            thumbnail: `${data.avatar}`,

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
              <Navbar/>
            <h2>List User</h2>
            {
              items.length > 0 ? items.map(item => {
              const {id, email, firstName, lastName, thumbnail} = item;
               return (

               <div key={id} className="bgCircle">
               <img src={thumbnail} alt={firstName} className="circle"/><br />
               <div className="ctr">
                  <h4>{firstName} {lastName} </h4> 
                  <h6>{email}</h6> <br />
                  {}
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default ListUser;