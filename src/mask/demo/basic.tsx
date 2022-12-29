import React,{useState} from 'react';
import Mask from '../';

export default () => {
    const [visible, setVisible] = useState(false)
    return <>
        <button onClick={()=>setVisible(true)}>打开Mask</button>
        <Mask visible={visible} onChange={()=>setVisible(!visible)} >这是一个mask</Mask>
    </>
};
