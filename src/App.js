import React, { Fragment,useEffect} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Subscribers from './Subscribers';
import Addsubscriber from './Addsubscriber';
import { SubscriberCountContext } from './SubscriberCountContext';
import Footer from './Footer';
class Subscriber{
  constructor(id,subscriber){
    this.id = id
    this.name = subscriber.name;
    this.phone =subscriber.phone;
  }
} 
function App(){
  
  const[list,setList] = useState([{
    id:1,
    name:'Pradeep',
    phone:1010101010
  },{
    id:2,
    name:'Vijay',
    phone:2121212121
  }]);
  

  const addsubscriberHandler=(subscriber)=>{
      if(list.length>0){
        let id = list[list.length-1]['id']+1;
        let data = new Subscriber(id,subscriber);
        console.log(subscriber);
        list.push(data);
          setList(list)
        
      }else{
          let id = 1;
          let data = new Subscriber(id,subscriber);
          list.push(data);
          setList(list)
      }
  }
  const deletehandler=(id)=>{
    let subscriberIndex=0;
    list.forEach((subscriber,index)=>{
      if(subscriber.id===id){
        subscriberIndex=index;
        // console.log(subscriberIndex);
      }
    });
    let list1=list.filter(subscriber=>{
      return subscriber['id']!==id;//return elements whose id is not equal to provided id
    });
    setList(list1);

  }
  // useEffect(()=>{
  //   document.title=`${list.length}`;
  // },[list]);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Subscribers subscribers={list} deletehandler={deletehandler}/>}></Route>
          <Route path='addsubscriber'  element={<Addsubscriber  addsubscriberHandler={addsubscriberHandler}/>}></Route>
        </Routes>  
      </BrowserRouter>
      <SubscriberCountContext.Provider value={list.length}>
      <Footer/>
      </SubscriberCountContext.Provider>
    </Fragment>
  );
  
}

export default App;
