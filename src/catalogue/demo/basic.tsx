import React, { useState } from 'react';
import Catalogue from '../';

export default () => {
    let catalogueData:any = [
        {
            "name": "问题现象",
            "children": [],
            "id": "57"
        },
        {
            "name": "问题分析过程",
            "children": [
                {
                    "name": "日志获取",
                    "children": [],
                    "id": "59"
                },
                {
                    "name": "问题分析",
                    "children": [],
                    "id": "60"
                },
                {
                    "name": "问题定位",
                    "children": [],
                    "id": "61"
                }
            ],
            "id": "58"
        },
        {
            "name": "问题处理",
            "children": [],
            "id": "62"
        },
        {
            "name": "总结",
            "children": [
                {
                    "name": "应用服务器高排查思路",
                    "children": [],
                    "id": "64"
                },
                {
                    "name": "数据库服务器CPU高排查方法",
                    "children": [],
                    "id": "65"
                }
            ],
            "id": "63"
        }
    ]
    const [activeId, setActiveId] = useState('57')
    return <Catalogue catalogueData={catalogueData} activeId={activeId} setActiveId={setActiveId}/>
};
