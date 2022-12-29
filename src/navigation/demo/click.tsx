import React,{useState} from 'react';
import Navigation from '../';

export default () => {
    const navList = [
        {
            id: '0',
            name: '导航1'
        },
        {
            id: '1',
            name: '导航2'
        },
        {
            id: '2',
            name: '导航3'
        },
        {
            id: '3',
            name: '导航4'
        },
        {
            id: '4',
            name: '导航5'
        },
        {
            id: '6',
            name: '导航6'
        },
    ]
    const [activeId, setActiveId] = useState('0')
    const handleClick = (item) => {
        console.log(item)
        setActiveId(item.id)
        alert('当前点击的name为'+item.name)
    }
    return  <div style={{background:'#eee',padding:'20px' }}>
        <Navigation activeId={activeId} navList={navList} handleClick={handleClick}/>
    </div>
};
