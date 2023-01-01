import React from "react";
import echarts from "echarts";


interface PropsType {
    /**
       * @description  挂载echarts的元素id,唯一值
       * @default
       */
    domId: string,

    /**
       * @description  配置项
       * @default
       */
    getOption: Function,
    /**
       * @description  宽度
       * @default
       */
    width?: string,
    /**
       * @description  高度
       * @default
       */
    height?: string,
}

export default class EChart extends React.Component<PropsType> {
    constructor(props) {
        super(props)
    }
    intiChart() {
        let option = this.props.getOption()
        var chartDom = document.getElementById(this.props.domId);
        var myChart = echarts.init(chartDom);
        option && myChart.setOption(option);
        //   const inTimer = setInterval(()=>{
        //     if(!window.echarts) return
        //     clearInterval(inTimer)
        //     let option = this.props.getOption()
        //     var chartDom = document.getElementById(this.props.domId);
        //     var myChart = echarts.init(chartDom);
        //     option && myChart.setOption(option);
        //   },timer)
    }
    componentDidMount() {
        this.intiChart()
    }
    render() {
        const { width = '100%', height = '90%' } = this.props
        return (
            <div id={this.props.domId} style={{ width: width, minHeight: "100px", height: height }}></div>
        )
    }
}