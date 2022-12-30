import React from 'react';
import Message from '../';
import '../style';

// export default () => <Alert kind="warning">这是一条警告提示</Alert>;
export default () => {
    return (
        <div className="Two">
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>{Message.info('普通提示',60*1000)}}>
                info
            </div>
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>{Message.success('成功提示')}}>
                success
            </div>
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>{Message.error('错误提示')}}>
            error
            </div>
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>{Message.warning('警告提示')}}>
            warning
            </div>
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>{
                const close = Message.loading()
                setTimeout(() => {
                    close()
                }, 2000);
            }}>
            loading
            </div>
        </div>
    )
};
