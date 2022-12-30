import React from 'react';
import Alert from '../';
import '../style';

// export default () => <Alert kind="warning">这是一条警告提示</Alert>;
export default () => {
    const open = (kind='info') => {
        Alert.open({
            kind:kind,
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            close: function () {
                console.log("关闭了...");
            }
        });
    }
    const openSuccess = (kind='success') => {
        Alert.open({
            kind:kind,
            content:'some messages...some messages...',
            close: function () {
                console.log("关闭了...");
            }
        });
    }
    const openError = () => {
        Alert.open({
            kind:'error',
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                </div>
            ),
            close: function () {
                console.log("关闭了...");
            }
        });
    }
    const openWarning = () => {
        Alert.open({
            kind:'warning',
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                </div>
            ),
            close: function () {
                console.log("关闭了...");
            }
        });
    }
    return (
        <div className="Two">
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>open()}>
                info
            </div>
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>openSuccess()}>
                success
            </div>
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>openError()}>
            error
            </div>
            <div className='default-btn' style={{marginRight:'20px'}} onClick={()=>openWarning()}>
            warning
            </div>
        </div>
    )
};
