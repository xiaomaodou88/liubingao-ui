import React,{useState} from 'react';
import TabBotton from '../';

export default () => {
    const [tabBottonList, setTabBottonList] = useState([
        {
            id: '0',
            name: '按钮1'
        },
        {
            id: '1',
            name: '按钮2'
        },
    ])
    const [tabBtnActId, setTabBtnActId] = useState('0')
    const handleTabBottonClick = (id) => {
        setTabBtnActId(id)
    }
    return  <div style={{height: '100px',background:'rgb(2 0 77)', lineHeight: '100px', textAlign: 'center' }}>
        <TabBotton tabBottonList={tabBottonList} activeId={tabBtnActId} onChange={handleTabBottonClick}/>
    </div>
};
