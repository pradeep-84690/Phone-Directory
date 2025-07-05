import React,{useContext} from 'react';
import { SubscriberCountContext } from './SubscriberCountContext';

export default function Footer(){
    let count = useContext(SubscriberCountContext);
    return(
        <h3> &nbsp; &nbsp; Number of Subscribers are : {count}</h3>
    ); 
};