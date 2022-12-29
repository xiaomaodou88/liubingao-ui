import React,{useState} from 'react';
import PersonalInfoCard from '../';

export default () => {
    const avatar = {
        url: '',
        username: '刘冰奥'
    }
    const organization = '北京泛微网络科技有限公司'
    const department = '项目开发一部'

    return  <div style={{height: '200px',padding:'20px' }}>
        <PersonalInfoCard avatar={avatar} organization={organization} department={department}/>
    </div>
};
