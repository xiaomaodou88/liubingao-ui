import React,{useState} from 'react';
import CardList from '../';

export default () => {
    const cardList = [
        {
            id: '0',
            image:'https://www.grapecity.com.cn/images/metalsmith/developer/spreadjs/index/icon_03.png',
            showMarkNew: true,
            titleClass: 'titleClass1',
            title: 'V16.0 预览版发布',
            describe: '全新的文件结构带来存储体积和加载性能的双重优化',
        },
        {
            id: '1',
            image:'https://www.grapecity.com.cn/images/metalsmith/developer/spreadjs/index/icon_xunlianying.png',
            titleClass:'titleClass2',
            title: 'V16.0 这是标题',
            describe: '这是描述这是描述这是描述这是描述这是描述这是描述',
        },
        {
            id: '2',
            image:'	https://www.grapecity.com.cn/images/metalsmith/developer/spreadjs/index/icon_05.png',
            titleClass:'titleClass3',
            title: 'V16.0 这是标题',
            describe: '这是描述这是描述这是描述这是描述这是描述这是描述',
        },
        {
            id: '3',
            image:'	https://www.grapecity.com.cn/images/metalsmith/developer/spreadjs/index/icon_09.png',
            titleClass:'titleClass4',
            title: 'V16.0 这是标题',
            describe: '这是描述这是描述这是描述这是描述这是描述这是描述',
        }
    ]
    const handleClick = (item:any) => {
        // setTabBtnActId(id)
        alert("当前点击"+ item.name)
    }
    return  <div style={{background:'#555',padding:'20px' }}>
        <CardList cardList={cardList} />
    </div>
};
