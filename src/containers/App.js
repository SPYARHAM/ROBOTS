import React ,{Component} from 'react'
import CardsLists from '../components/CardsLists'
import Scroll from '../components/Scroll.js'
// import {robots} from './robots.js'
import SearchBox from '../components/SearchBox'


class  App extends Component {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchfield : '',
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { 
           return  response.json();
        })
        .then(users =>{
            this.setState({robots:users})
        });
    }
      
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
       
    }
  
    render () {
        const {robots,searchfield} = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!this.state.robots.length ) {
             return <h1>Loading...</h1>
        }
        else{
            return (
                <div> 
                      <SearchBox searchChange={this.onSearchChange}/>  
                      <Scroll> 
                            <CardsLists robots={filterRobots}/> 
                      </Scroll> 
                        
                </div>
            );
        }
      
    }
        
 }
 
 export default App;
