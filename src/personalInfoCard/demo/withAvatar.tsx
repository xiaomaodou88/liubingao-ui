import React,{useState} from 'react';
import PersonalInfoCard from '../';

export default () => {
    const avatar = {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F14%2F20200214154619_MaXTB.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674808181&t=a3019e5a77d92f21ec99bab9bafdf76d',
        username: '刘冰奥'
    }
    const organization = '上海泛微网络科技有限公司-EBU事业群'
    const department = '前端开发工程师'

    return  <div style={{height: '200px',padding:'20px' }}>
        <PersonalInfoCard avatar={avatar} organization={organization} department={department} width={500}/>
    </div>
};
