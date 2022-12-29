import React,{useState} from 'react';
import CardList from '../';

export default () => {
    const cardList = [
        {
            id: '0',
            image:'https://gdown.baidu.com/img/0/200_200/1c7d0637ca01803040e087fb44e47654.png',
            titleClass: 'titleClass1',
            title: 'a标签跳转百度',
            describe: 'a标签跳转百度a标签跳转百度a标签跳转百度a标签跳转百度',
            url:'https://www.baidu.com/'
        },
        {
            id: '1',
            image:'https://p1.itc.cn/q_70/images03/20201229/2998843396b647a5874d30c3d80d678f.png',
            showMarkNew: true,
            titleClass:'titleClass2',
            title: 'a标签跳转淘宝',
            describe: 'a标签跳转淘宝a标签跳转淘宝a标签跳转淘宝',
            url:'https://www.taobao.com/'
        },
        {
            id: '2',
            image:'https://img0.baidu.com/it/u=2652413754,891528477&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=578',
            titleClass:'titleClass3',
            title: 'a标签跳转网易',
            describe: 'a标签跳转网易a标签跳转网易a标签跳转网易a标签跳转网易',
            url:'https://www.163.com/'
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
