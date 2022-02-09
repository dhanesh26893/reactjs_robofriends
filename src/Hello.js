import React,{Component} from 'react'
import './Hello.css';


// two ways we can write components
//1)
// class Hello extends Component{
//     render(){
//         return (
//         <div className="f3 tc">
//             <h1>Hello World</h1>
//             {/* <p>Welcome to React</p> */}
//             <p>{this.props.greeting}</p>
//         </div>
//         );
//     }
// }


//2
const Hello=(props)=>{
    return (
        <div className="f3 tc">
             <h1>Hello World</h1>
             {/* <p>Welcome to React</p> */}
             <p>{props.greeting}</p>
         </div>
    );
}

export default Hello;