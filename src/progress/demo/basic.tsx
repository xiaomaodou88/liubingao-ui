import React,{useState} from 'react';
import Progress from '../';

export default () => {
    const [visible, setVisible] = useState(false)
    return  <>
        <h4 style={{textAlign: 'center'}}>双层百分比</h4>
        <Progress percentInner={'50%'} percent={'80%'} linearGradien={['#FC7B03','#FCD003']} width='345px'/>
        <h4 style={{textAlign: 'center'}}>内层百分比</h4>
        <Progress percentInner={'60%'}linearGradien={['#FC7B03','#FCD003']} width='345px'/>
        <h4 style={{textAlign: 'center'}}>普通百分比</h4>
        <Progress percent={'80%'} linearGradien={['#FC7B03','#FCD003']} width='345px'/>
        <h4 style={{textAlign: 'center'}}>不展示Step showStep=false</h4>
        <Progress percentInner={'70%'} linearGradien={['#FC7B03','#FCD003']} showStep={false} width='345px'/>
        <h4 style={{textAlign: 'center'}}>改变宽度</h4>
        <Progress percentInner={'70%'} linearGradien={['#FC7B03','#FCD003']} showStep={false} width='400px'/>
        <h4 style={{textAlign: 'center'}}>改变渐变色</h4>
        <Progress percentInner={'70%'} linearGradien={['blue','#F40']} showStep={false} width='400px'/>
    </>
};
