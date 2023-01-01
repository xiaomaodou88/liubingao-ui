import React, { useState } from 'react';
import EChart from '..';
import echarts from "echarts";
import { getOptions } from './chartOptions'
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: 0,
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        axisLine: {
            show: false //y轴线消失
        },
        axisTick: {
            show: false //y轴坐标点消失
        },
        axisLabel: {//y轴文字的配置
            textStyle: {
                //数值样式
                color: "#fff",
                fontSize: 12,
            },
            // formatter: '{value} %'//y轴的每一个刻度值后面加上‘%’号
        },
        type: 'category',
        data: ['光电', '风电', '水电', '火电']
    },
    series: [
        {
            type: 'bar',
            barWidth: 20,
            barCategoryGap: 28,
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启数值显示
                        position: "right", //在上方显示
                        textStyle: {
                            //数值样式
                            color: "#fff",
                            fontSize: 12,
                        },
                    },
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            { offset: 0, color: '#4E88FF' },
                            { offset: 1, color: '#1770FA' }
                        ]
                    )
                }
            },
            data: [2100, 3214, 4125, 6517]
        }
    ]
}

export default () => {
    return (<>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <EChart domId='Bar' width='500px' height='249px' getOption={() => option} />
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <EChart domId='CoalPowerBar' width='500px' height='200px' getOption={()=>getOptions('CoalPowerBar')}/>
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <EChart domId='ThermalPowerPie' width='500px' height='200px' getOption={()=>getOptions('ThermalPowerPie')}/>
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <EChart domId='PowerBar' width='500px' height='200px' getOption={()=>getOptions('PowerBar')}/>
        </div>
        <div style={{ height: '249px', background: 'rgb(2 0 77)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <EChart domId='stateBar' width='500px' height='200px' getOption={()=>getOptions('stateBar')}/>
        </div>
    </>)
};
