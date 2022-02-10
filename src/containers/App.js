import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App () {
    // constructor() {
    //   super()
    //   this.state = {
    //     robots: [],
    //     searchfield: '',
    //   }
    // }

    const [robots,setRobots] = useState([]);
    // here useState returns us robots which is a piece of state here its initialized to [] and a function which changes that state
    const [searchfield,setSearchfield] = useState('');
    const [count,setCount] = useState(0);
    // componentDidMount() {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users }))
    //   // this.setState({robots:this.state.robots});
    // }
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)})
        console.log("count : "+count)
    },[count]) //only run if count changes


    const onSearchChange = (event) => {
      setSearchfield(event.target.value)
    }



    // const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length
    ?(
      <div className='tc'>
        <h1>Loading..</h1>
      </div>
      )
    :
      (     
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <button onClick={()=>setCount(count+1)}>Click Me!</button>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );

    }




export default App;
