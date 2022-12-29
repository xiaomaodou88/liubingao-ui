import React,{useState} from 'react';
import WorkbenchApp from '../';

export default () => {
    const [appList, setAppList] = useState([
        {
            id: '0',
            image:'/img/3.png',
            name: '智慧党建'
        },
        {
            id: '1',
            image:'/img/2.png',
            name: '大数据'
        },
        {
            id: '2',
            image:'/img/5.png',
            name: '算法'
        },
    ])
    const handleClick = (item:any) => {
        // setTabBtnActId(id)
        alert("当前点击"+ item.name)
    }
    return  <div style={{height: '200px',background:'#eee',padding:'20px' }}>
        <WorkbenchApp appList={appList} handleClick={handleClick}/>
    </div>
};
