import React,{useState} from 'react';
import Navigation from '../';

export default () => {
    const navList = [
        {
            id: '0',
            icon:'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
            name: '算法'
        },
        {
            id: '1',
            icon:'https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png',
            name: '大数据'
        },
        {
            id: '2',
            icon:'https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png',
            name: '公文'
        },
        {
            id: '3',
            icon:'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
            name: '党建'
        },
        {
            id: '4',
            icon:'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
            name: '建模'
        },
        {
            id: '5',
            icon:'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
            name: '流程'
        },
        {
            id: '6',
            icon:'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
            name: '人力'
        },
    ]
    const [activeId, setActiveId] = useState('0')
    const handleClick = (item) => {
        setActiveId(item.id)
    }
    return  <div style={{background:'#eee',padding:'20px' }}>
        <Navigation activeId={activeId} navList={navList} handleClick={handleClick}/>
    </div>
};
