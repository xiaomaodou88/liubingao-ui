import React, { useState } from 'react';
import EChart from '..';
import echarts from "echarts";
import { getOptions } from './chartOptions'
const option = {
    xAxis: {
        type: 'category',
        data: ['04：00', '08：00', '12：00', '16：00', '20：00', '24：00'],
        boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(255,255,255,0.45)'
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {       //y轴
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(255,255,255,0.45)'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['rgba(255,255,255,0.15)'],
                type: 'solid'
            }
        }
    },
    tooltip: {
        show: true, backgroundColor: "rgba(255,255,255)", //设置背景图片 rgba格式
        color: "black",
        borderWidth: "1", //边框宽度设置1
        borderColor: "gray", //设置边框颜色
        textStyle: {
            color: "black" //设置文字颜色
        },
        trigger: 'axis',
        formatter: function (params) {
            params = params[0]
            return params.value
        },
        axisPointer: {
            animation: true
        }
    },
    series: [
        {
            name: '公司',
            data: [550, 570, 250, 500, 750, 300],
            type: 'line',
            // smooth: true,
            showSymbol: false,
            itemStyle: {//线条的渐变
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            { offset: 0, color: '#00E7EB' },
                            { offset: 1, color: '#00A3FE' }
                        ]
                    )
                }
            }
        }, {
            name: '公司昨日',
            data: [380, 550, 290, 200, 900, 200],
            type: 'line',
            // smooth: true,
            showSymbol: false,
            itemStyle: {//线条的渐变
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            { offset: 0, color: '#a23b9f' },
                            { offset: 1, color: '#78368b' }
                        ]
                    )
                }
            }
        }, {
            name: '火',
            data: [200, 270, 201, 302, 807, 500],
            type: 'line',
            // smooth: true,
            showSymbol: false,
            itemStyle: {//线条的渐变
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            { offset: 0, color: '#61cdb5' },
                            { offset: 1, color: '#66cdb1' }
                        ]
                    )
                }
            }
        }, {
            name: '水',
            data: [701, 500, 200, 300, 650, 400],
            type: 'line',
            // smooth: true,
            showSymbol: false,
            itemStyle: {//线条的渐变
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            { offset: 0, color: '#d97665' },
                            { offset: 1, color: '#e36f6a' }
                        ]
                    )
                }
            }
        }, {
            name: '新能源',
            data: [102, 390, 240, 700, 620, 200],
            type: 'line',
            // smooth: true,
            showSymbol: false,
            itemStyle: {//线条的渐变
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            { offset: 0, color: '#2870dd' },
                            { offset: 1, color: '#366bcc' }
                        ]
                    )
                }
            }
        }
    ],
    legend: {
        data: [
            {
                name: '公司',
                icon: 'roundRect',
                lineStyle: {
                    type: 'dotted'
                },
                textStyle: {
                    color: '#5d628b'
                }
            }, {
                name: '公司昨日',
                icon: 'roundRect',
                lineStyle: {
                    type: 'dotted'
                },
                textStyle: {
                    color: '#5d628b'
                }
            }, {
                name: '水',
                icon: 'roundRect',
                lineStyle: {
                    type: 'dotted'
                },
                textStyle: {
                    color: '#5d628b'
                }
            }, {
                name: '火',
                icon: 'roundRect',
                lineStyle: {
                    type: 'dotted'
                },
                textStyle: {
                    color: '#5d628b'
                }
            }, {
                name: '新能源',
                icon: 'roundRect',
                lineStyle: {
                    type: 'dotted'
                },
                textStyle: {
                    color: '#5d628b'
                }
            }
        ]
    }
}

export default () => {
    return (<>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
            <EChart domId='Line' width='500px' height='249px' getOption={() => option} />
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
            <EChart domId='NewEnergyLine' width='500px' height='220px' getOption={()=>getOptions('NewEnergyLine')}/>
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
            <EChart domId='StartLine' width='500px' height='220px' getOption={()=>getOptions('StartLine')}/>
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
            <EChart domId='PowerLine' width='500px' height='220px' getOption={()=>getOptions('PowerLine')}/>
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
            <EChart domId='EconomicsLine' width='500px' height='220px' getOption={()=>getOptions('EconomicsLine')}/>
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
            <EChart domId='CoalPowerLine' width='500px' height='220px' getOption={()=>getOptions('CoalPowerLine')}/>
        </div>
    </>)
};
