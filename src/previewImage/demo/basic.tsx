import React,{useState} from 'react';
import PreviewImage from '../';

export default () => {
    const handleClick = (item) => {
        // setTabBtnActId(id)
        alert("当前点击"+ item.name)
    }
    const [visible, setVisible] = useState(false)
    const url = 'https://img.tukuppt.com/photo-big/00/00/94/6152bc0ce6e5d805.jpg'
    return  <div style={{height: '200px',background:'#eee',padding:'20px' }}>
        <img src={url} alt=""
            style={{objectFit: 'contain',height: '100%',cursor:'pointer'}}
            onClick={()=>{
                setVisible(true)
            }}
        />
        <PreviewImage 
            visible={visible}
            whoolScale={true}
            currentImgUrl={url}
            close={()=>{
                setVisible(false)
            }}
            />
    </div>
};
