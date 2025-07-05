import React, {useState,Fragment } from 'react';
import './Addsubscriber.css'
import Header from './Header';
import { Link } from 'react-router-dom';

function Addsubscriber(props){
   
    // const [subscriberList,setSubscriberList] = useState([]);

    
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    // let data = JSON.parse(props.subscribers)
    // const[list,setList] = useState(props.subscribers);
    
    const addSubscriberHandler = (event)=>{
        if(name==='' ||  phone===''){
            alert(`Please fill out the fields!!`)
        }
        else{
            let subscriber={
                name:name,
                phone:phone
            }
            props.addsubscriberHandler(subscriber)
            // alert(`${subscriber['name']} added!!!`);
        }
        setName('');
        setPhone('');

    }
    
    return(
        <Fragment>
            <Header heading="Add Subscriber"/>
               <Link to='/'><button className='back-btn'>Back</button></Link>
            <div className='subscriber-container'>
               <div>
                <div className='span-control'>Name: </div>
                <input id='name' type='text' onChange={e=>setName(e.target.value)} value={name} />
                </div>
               <div>
                <div className='span-control'>Phone:</div>
                <input id='phone' type='text' onChange={e=>setPhone(e.target.value)} value={phone}/><br/>
                </div>
            </div>
            <div className='data-container'>
                <label className='span-control-1'>Subscriber to be added :</label>
                <label className='span-control'>Name: {name}</label>
                <label className='span-control'>Phone: {phone}</label>
            </div>
            <button id='add-subscriber-btn' className='add-btn' onClick={addSubscriberHandler}>Add</button>

            
            {/* <div className='grid-container-heading'>
                <span>Name</span>
                <span>Phone</span>
            </div>    
            { 
                list.map(val=>{
                    return(
                       <div className='grid-container2'>
                            <span>{val.name}</span> 
                            <span>{val.phone}</span> 
                            <div><button>Delete</button></div>
                       </div>
                    )
                })
            } */}
            
    </Fragment>
)}
export default Addsubscriber;