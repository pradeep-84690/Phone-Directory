import React, { Fragment} from 'react'
import './Subscribers.css'
import { Link } from 'react-router-dom'
import Header from './Header'


export default function Subscribers(props) {
    // let delete_Arr = document.querySelectorAll('delete-btn');
    // console.log(delete_Arr);
    let list = props.subscribers;
    
    const deleteHandler=(id)=>{
        props.deletehandler(id);
    }
    
    return (
        <Fragment>
        <Header heading="Phone Directory"/>
        <Link to='/addsubscriber'><button className='btn-add'>Add</button></Link>
        <section className='container'>
            <label className='span-control'>Name</label>    
            <label className='span-control'>Phone</label>
        </section> 
            {
                list.map(i=>{
                    return(<div key={i.id} className='grid-container-2'>
                        <span >{i.name}</span>
                        <span>{i.phone}</span>
                        <div><button className='delete-btn' onClick={deleteHandler.bind(this,i.id)}>Delete</button></div>
                        </div>)
                    })
            }  
        
    </Fragment>
  )
}
