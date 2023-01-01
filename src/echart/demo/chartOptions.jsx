import echarts from "echarts";
export const getOptions = (key) => {
    const opt = {
        CoalPowerLine: {
            grid: {
                x: '5%', //相当于距离左边效果:padding-left
                y: '5%', //相当于距离上边效果:padding-top
                top: '25%',
                bottom: '0',
                containLabel: true
            },
            xAxis: {
                type: 'time',
                boundaryGap: false,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: ['rgba(255,255,255,0.15)'],
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                },
                data: ['4:00', '8:00', '12:00', '16:00', '20:00', '23.59']
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(255,255,255,0.15)'],
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                },
            },
            series: [
                {
                    data: [
                        { name: '2022/11/22 6:00:00', value: ['2022/11/22 6:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 7:00:00', value: ['2022/11/22 7:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 8:00:00', value: ['2022/11/22 8:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 9:00:00', value: ['2022/11/22 9:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 10:00:00', value: ['2022/11/22 10:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 11:00:00', value: ['2022/11/22 11:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 12:00:00', value: ['2022/11/22 12:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 13:00:00', value: ['2022/11/22 13:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 14:00:00', value: ['2022/11/22 14:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 15:00:00', value: ['2022/11/22 15:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 16:00:00', value: ['2022/11/22 16:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 17:00:00', value: ['2022/11/22 17:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 18:00:00', value: ['2022/11/22 18:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 19:00:00', value: ['2022/11/22 19:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 20:00:00', value: ['2022/11/22 20:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 21:00:00', value: ['2022/11/22 21:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 22:00:00', value: ['2022/11/22 22:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 23:00:00', value: ['2022/11/22 23:00:00', getRandomNum(100)] },
                        { name: '2022/11/22 23:30:00', value: ['2022/11/22 23:30:00', getRandomNum(100)] },
                        { name: '2022/11/22 23:59:59', value: ['2022/11/22 23:59:59', getRandomNum(100)] },
                    ],
                    type: 'line',
                    showSymbol: false,
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#3D7FFF' },
                            { offset: 1, color: '#3D7FFF' }
                        ]
                    }],
                    areaStyle: {
                        color: '#3D7FFF'
                    }
                }
            ]
        },
        CoalPowerBar: {
            xAxis: {
                type: 'category',
                data: ['05', '06', '07', '08', '09', '10', '11'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                },
            },
            legend: {
                orient: 'horizontal',
                textStyle: {
                    fontSize: 12,//字体大小
                    color: 'rgba(255,255,255,.45)'//字体颜色
                },
                data: ['自产煤量', '结算价格', '完全成本']
            },
            grid: {
                x: '5%', //相当于距离左边效果:padding-left
                y: '5%', //相当于距离上边效果:padding-top
                top: '25%',
                bottom: '0',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                name: '',
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
            series: [
                {
                    name: '自产煤量',
                    type: 'bar',
                    itemStyle: {
                        color: '#f40',
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#4E88FF' },
                                    { offset: 1, color: '#00FFF3' }
                                ]
                            )
                        }
                    },
                    data: [50, 70, 70, 50, 70, 60, 70],
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#FC7B03' },
                            { offset: 1, color: '#FCD003' }
                        ]
                    }],
                    barWidth: 7,
                },
                {
                    name: '结算价格',
                    type: 'bar',
                    itemStyle: {
                        color: '#f40',
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 1, 0, 0,
                                [
                                    { offset: 0, color: '#00FFF3' },
                                    { offset: 1, color: '#2DD55C' }
                                ]
                            )
                        }
                    },
                    data: [55, 75, 75, 55, 75, 65, 75],
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#4E88FF' },
                            { offset: 1, color: '#00FFF3' }
                        ]
                    }],
                    barWidth: 7,
                }, {
                    name: '完全成本',
                    type: 'bar',
                    itemStyle: {//线条的渐变
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: '#DEA60F' },
                                    { offset: 1, color: '#FFE457' }
                                ]
                            )
                        }
                    },
                    data: [30, 25, 20, 30, 25, 30, 30],
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#4E88FF' },
                            { offset: 1, color: '#00FFF3' }
                        ]
                    }],
                    barWidth: 7,
                },
            ]
        },
        stateBar: {
            xAxis: {
                type: 'category',
                data: ['#机组1', '#机组2'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                },
            },
            legend: {
                orient: 'horizontal',
                textStyle: {
                    fontSize: 12,//字体大小
                    color: 'rgba(255,255,255,.45)'//字体颜色
                },
                data: ['有功', '无功']
            },
            grid: {
                x: '5%', //相当于距离左边效果:padding-left
                y: '5%', //相当于距离上边效果:padding-top
                top: '15%',
                bottom: '0',
                containLabel: true
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
            series: [
                {
                    name: '有功',
                    type: 'bar',
                    data: [
                        {
                            value: 900,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#FC7B03' },
                                            { offset: 1, color: '#FCD003' }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 1450,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#FC7B03' },
                                            { offset: 1, color: '#FCD003' }
                                        ]
                                    )
                                }
                            }
                        }
                    ],
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#FC7B03' },
                            { offset: 1, color: '#FCD003' }
                        ]
                    }],
                    barWidth: 15,
                }, {
                    name: '无功',
                    type: 'bar',
                    data: [
                        {
                            value: 1700,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#4E88FF' },
                                            { offset: 1, color: '#00FFF3' }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 1650,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#4E88FF' },
                                            { offset: 1, color: '#00FFF3' }
                                        ]
                                    )
                                }
                            }
                        }
                    ],
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#4E88FF' },
                            { offset: 1, color: '#00FFF3' }
                        ]
                    }],
                    barWidth: 15,
                }
            ]
        },
        PowerBar: {
            xAxis: {
                type: 'category',
                data: ['火电', '水电', '风电', '光伏'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                },
            },
            grid: {
                x: '5%', //相当于距离左边效果:padding-left
                y: '5%', //相当于距离上边效果:padding-top
                top: '5%',
                bottom: '5%',
                containLabel: true
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
            series: [
                {
                    name: '火电',
                    type: 'bar',
                    data: [
                        {
                            value: 1500,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#EF1959' },
                                            { offset: 1, color: '#FC7B03' }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 1200,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#4E88FF' },
                                            { offset: 0.5, color: '#00FFF3' },
                                            { offset: 1, color: '#00FFF3' }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 1900,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#00FFF3' },
                                            { offset: 1, color: '#2DD55C' }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 1400,
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0],
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#FC7B03' },
                                            { offset: 1, color: '#FCD003' }
                                        ]
                                    )
                                }
                            }
                        }
                    ],
                    type: 'bar',
                    barWidth: 15,
                }
            ]
        },
        EconomicsLine: {
            legend: {
                orient: 'horizontal',
                textStyle: {
                    fontSize: 12,//字体大小
                    color: 'rgba(255,255,255,.45)'//字体颜色
                },
                data: ['机组#1', '机组#2']
            },
            xAxis: {
                type: 'category',
                data: ['2012', '2015', '2017'],
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
                    name: '机组#1',
                    data: [getRandomNum(1000), getRandomNum(1000), getRandomNum(1000)],
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    itemStyle: {//线条的渐变
                        normal: {
                            color: '#FCD003'
                        }
                    }
                },
                {
                    name: '机组#2',
                    data: [getRandomNum(1000), getRandomNum(1000), getRandomNum(1000)],
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    itemStyle: {//线条的渐变
                        normal: {
                            color: '#FC7B03'
                        }
                    }
                }
            ]
        },
        PowerLine: {
            xAxis: {
                type: 'category',
                data: ['08-20', '08-21', '08-22', '08-23', '08-24', '08-25', '08-26'],
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
                    data: [getRandomNum(1000), getRandomNum(1000), getRandomNum(1000), getRandomNum(1000), getRandomNum(1000), getRandomNum(1000), getRandomNum(1000)],
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    itemStyle: {//线条的渐变
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0, color: '#EF1A57' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#FB7805' // 100% 处的颜色
                            }]
                            )
                        }
                    }
                }
            ]
        },
        StartLine: {
            legend: {
                orient: 'horizontal',
                textStyle: {
                    fontSize: 12,//字体大小
                    color: 'rgba(255,255,255,.45)'//字体颜色
                },
                data: ['机组#1', '机组#2']
            },
            xAxis: {
                type: 'category',
                data: ['第一季度', '第二季度', '第三季度', '第四季度'],
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
                    name: '机组#1',
                    data: [5, 2, 7, 6],
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    itemStyle: {//线条的渐变
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0, color: '#EF1A57' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#FB7805' // 100% 处的颜色
                            }]
                            )
                        }
                    }
                },
                {
                    name: '机组#2',
                    data: [3, 4, 5, 9],
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    itemStyle: {//线条的渐变
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0, color: '#FC7D03' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#FCCF03' // 100% 处的颜色
                            }]
                            )
                        }
                    }
                }
            ]
        },
        ThermalPowerPei_ZHUANG_JI: {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [
                {
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '60%'],
                    label: {
                        position: 'inner',
                        fontSize: 14
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: 44,
                            name: '运行',
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#4E88FF' },
                                            { offset: 1, color: '#00FFF3' }
                                        ]
                                    )
                                }
                            },
                        },
                        {
                            value: 6,
                            name: '检修',
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#E0A912' },
                                            { offset: 1, color: '#FDE053' }
                                        ]
                                    )
                                }
                            },
                        },
                        {
                            value: 5,
                            name: '备用',
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#00FFF3' },
                                            { offset: 1, color: '#2DD55C' }
                                        ]
                                    )
                                }
                            },
                        }
                    ]
                },
                {
                    type: 'pie',
                    radius: ['70%', '80%'],
                    labelLine: {
                        length: 10
                    },
                    label: {
                        color: '#fff'
                    },
                    data: [
                        {
                            value: 1993,
                            name: '运行',
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#4E88FF' },
                                            { offset: 1, color: '#00FFF3' }
                                        ]
                                    )
                                }
                            },
                        },
                        {
                            value: 247,
                            name: '检修',
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#E0A912' },
                                            { offset: 1, color: '#FDE053' }
                                        ]
                                    )
                                }
                            },
                        },
                        {
                            value: 202,
                            name: '备用',
                            itemStyle: {
                                color: '#f40',
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#00FFF3' },
                                            { offset: 1, color: '#2DD55C' }
                                        ]
                                    )
                                }
                            },
                        }
                    ]
                }
            ]
        },
        ThermalPowerPie: {
            legend: {
                data: [
                    {
                        name: '运行容量',
                        icon: 'roundRect',
                        lineStyle: {
                            type: 'dotted'
                        },
                        textStyle: {
                            color: '#5d628b'
                        }
                    }, {
                        name: '总体容量',
                        icon: 'roundRect',
                        lineStyle: {
                            type: 'dotted'
                        },
                        textStyle: {
                            color: '#5d628b'
                        }
                    }
                ]
            },
            xAxis: {
                type: 'category',
                data: ['11/11', '11/12', '11/13', '11/14', '11/15', '11/16', '11/17'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                },
            },
            legend: {
                orient: 'horizontal',
                textStyle: {
                    fontSize: 12,//字体大小
                    color: 'rgba(255,255,255,.45)'//字体颜色
                },
                data: ['运行容量', '总体容量', {
                    name: '占比',
                    icon: 'roundRect',
                    lineStyle: {
                        type: 'dotted'
                    },
                    textStyle: {
                        color: '#5d628b'
                    }
                }]
            },
            grid: {
                x: '10%', //相当于距离左边效果:padding-left
                y: '10%', //相当于距离上边效果:padding-top
                top: '25%',
                bottom: '0',
                containLabel: true
            },
            yAxis: [{
                type: 'value',
                name: '', //y轴名称
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
            }, {
                type: 'value',
                scale: true,
                name: '', //y轴名称
                max: 100,
                min: 0,
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
                },
                boundaryGap: [0.2, 0.2]
            }],
            series: [
                {
                    name: '运行容量',
                    type: 'bar',
                    itemStyle: {
                        color: '#f40',
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#4E88FF' },
                                    { offset: 1, color: '#00FFF3' }
                                ]
                            )
                        }
                    },
                    data: [2300, 2200, 2150, 2100, 2100, 2050, 2030],
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#FC7B03' },
                            { offset: 1, color: '#FCD003' }
                        ]
                    }],
                    barWidth: 7,
                }, {
                    name: '总体容量',
                    type: 'bar',
                    itemStyle: {
                        color: '#f40',
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 1, 0, 0,
                                [
                                    { offset: 0, color: '#00FFF3' },
                                    { offset: 1, color: '#2DD55C' }
                                ]
                            )
                        }
                    },
                    data: [2600, 2600, 2600, 2600, 2600, 2600, 2600,],
                    color: [{
                        type: 'linear',
                        colorStops: [
                            { offset: 0, color: '#4E88FF' },
                            { offset: 1, color: '#00FFF3' }
                        ]
                    }],
                    barWidth: 7,
                },
                {
                    name: '占比',
                    yAxisIndex: 1,
                    data: [90, 88, 87, 85, 83, 82, 80],
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    itemStyle: {//线条的渐变
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: '#DEA60F' },
                                    { offset: 1, color: '#FFE457' }
                                ]
                            )
                        }
                    }
                }
            ]
        },
        NewEnergyLine: {
            legend: {
                data: [
                    {
                        name: '完成量',
                        icon: 'roundRect',
                        lineStyle: {
                            type: 'dotted'
                        },
                        textStyle: {
                            color: '#5d628b'
                        }
                    }, {
                        name: '计划类',
                        icon: 'roundRect',
                        lineStyle: {
                            type: 'dotted'
                        },
                        textStyle: {
                            color: '#5d628b'
                        }
                    }, {
                        name: '完成率',
                        icon: 'roundRect',
                        lineStyle: {
                            type: 'dotted'
                        },
                        textStyle: {
                            color: '#5d628b'
                        }
                    }
                ]
            },
            grid: {
                x: '5%', //相当于距离左边效果:padding-left
                y: '5%', //相当于距离上边效果:padding-top
                top: '25%',
                bottom: '0',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '30%'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,0.45)'
                    }
                }
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                seriesIndex: 0,
                pieces: [
                    {
                        gt: 0,
                        lt: 7,
                        color: 'rgba(90,216,166,0.17)'
                    }
                ]
            },
            series: [
                {
                    name: '完成量',
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: '#4CFFCA',
                        width: 2
                    },
                    areaStyle: {},
                    data: [
                        ['1', getRandomNum(800)],
                        ['3', getRandomNum(800)],
                        ['5', getRandomNum(800)],
                        ['7', getRandomNum(800)],
                        ['9', getRandomNum(800)],
                        ['12', getRandomNum(800)],
                        ['15', getRandomNum(800)],
                        ['18', getRandomNum(800)],
                        ['21', getRandomNum(800)],
                        ['24', getRandomNum(800)],
                        ['27', getRandomNum(800)],
                        ['30', getRandomNum(800)],
                    ]
                }, {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: '#1770FA',
                        width: 2
                    },
                    data: [
                        ['1', getRandomNum(800)],
                        ['3', getRandomNum(800)],
                        ['5', getRandomNum(800)],
                        ['7', getRandomNum(800)],
                        ['9', getRandomNum(800)],
                        ['12', getRandomNum(800)],
                        ['15', getRandomNum(800)],
                        ['18', getRandomNum(800)],
                        ['21', getRandomNum(800)],
                        ['24', getRandomNum(800)],
                        ['27', getRandomNum(800)],
                        ['30', getRandomNum(800)],
                    ]
                }, {
                    name: '计划类',
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: '#E4B11C',
                        width: 2
                    },
                    data: [
                        ['1', getRandomNum(800)],
                        ['3', getRandomNum(800)],
                        ['5', getRandomNum(800)],
                        ['7', getRandomNum(800)],
                        ['9', getRandomNum(800)],
                        ['12', getRandomNum(800)],
                        ['15', getRandomNum(800)],
                        ['18', getRandomNum(800)],
                        ['21', getRandomNum(800)],
                        ['24', getRandomNum(800)],
                        ['27', getRandomNum(800)],
                        ['30', getRandomNum(800)],
                    ]
                }, {
                    name: '完成率',
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: '#7B3BAB',
                        type: 'dashed',  //'dotted'点型虚线 'solid'实线 'dashed'线性虚线
                        width: 2
                    },
                    data: [
                        ['1', 800],
                        ['3', 800],
                        ['5', 800],
                        ['7', 800],
                        ['9', 800],
                        ['12', 800],
                        ['15', 800],
                        ['18', 800],
                        ['21', 800],
                        ['24', 800],
                        ['27', 800],
                        ['30', 800],
                    ]
                }
            ]
        },
    }
    return opt[key]

}

const getRandomNum = (random = 1000) => {
    return Number(Math.random() * random).toFixed(2)
}
