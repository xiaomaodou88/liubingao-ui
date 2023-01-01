import React, { useState } from 'react';
import EChart from '..';
import echarts from "echarts";
import { getOptions } from './chartOptions'
const data = [2441.00, 263.64, 791.06, 24.10]
const option = {
    color: ['#1890FF', '#13C2C2', '#2FC25B'],
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
    },
    legend: {
        icon: 'circle',
        type: 'plain',
        textStyle: { //图例文字的样式
            color: 'rgba(255,255,255,0.60)',
            fontSize: 12
        },
        orient: 'horizontal',
        bottom: 20,
        data: ['火电', '水电', '风电', '光伏']
    },
    grid: {
        top: '0',
        left: '3%',
        right: '4%',
        bottom: '10%',
        // containLabel: true
    },
    series: [
        {
            name: '',
            type: 'pie',
            center: ["50%", "40%"],
            radius: ['30%', '50%'],
            label: { // 标注
                show: true,
                textStyle: {
                    color: '#fff'
                },
                position: 'center',
                formatter: '发电量\n\r1358.3'
            },
            data: [
                {
                    value: data[0],
                    name: '火电',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                { offset: 0, color: '#FC7B03' },
                                { offset: 1, color: '#EF1959' }
                            ])
                        }
                    }
                },
                {
                    value: data[1],
                    name: '水电',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                { offset: 0, color: '#4E88FF' },
                                { offset: 1, color: '#00FFF3' }
                            ])
                        }
                    }
                },
                {
                    value: data[2],
                    name: '风电',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                { offset: 0, color: '#00FFF3' },
                                { offset: 1, color: '#2DD55C' }
                            ])
                        }
                    }
                },
                {
                    value: data[3],
                    name: '光伏',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                { offset: 0, color: '#FC7B03' },
                                { offset: 1, color: '#FCD003' }
                            ])
                        }
                    }
                }
            ]
        }
    ]
}

export default () => {
    return (<>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', lineHeight: '100px', textAlign: 'center' }}>
            <EChart domId='Pie' width='100%' height='200px' getOption={() => option} />
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
            <EChart domId='ThermalPowerPei_ZHUANG_JI' width='300px' height='200px' getOption={()=>getOptions('ThermalPowerPei_ZHUANG_JI')}/>
        </div>
    </>)
};
