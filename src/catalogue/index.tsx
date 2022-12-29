import { type } from 'os';
import React from 'react';
import './style';
type Item = {
  name:string,
  children:Array<Item>,
  id:string | number
}
interface PropsType {
  /**
   * @description  目录数据,每一项见下边Item结构
   * @default
   */
  catalogueData:Array<Item>,
  /**
  * @description  当前选中的id
  * @default
  */
  activeId: string | number,
  /**
  * @description  设置activeId的方法
  * @default
  */
  setActiveId:Function,
  /**
   * @description  是否展示计数
   * @default false
   */
  showCounter?: boolean,
  /**
   * @description  一级目录是否采用汉字计数
   * @default false
   */
  toHan?: boolean,

  /**
   * @description  点击的回调,回传当前点击的item
   * @default
   */
  onChange?: Function,
  /**
   * @description  类名
   * @default
   */
  className?: string,
  children?: React.ReactNode
}

type StateType = {
  catalogueData:any
}



class Catalogue extends React.Component<PropsType,StateType> {
  
  constructor(props: PropsType) {
    super(props);
    this.state = {
      catalogueData: fn(this.props.catalogueData,0)
    }
}
  triggerCatalogue=(item:any)=>{
    let { catalogueData } = this.state
    const i = catalogueData.findIndex((c:any)=>c.id === item.id)
    if(i < 0)return
    catalogueData[i].showChild = !item.showChild
    this.setState({catalogueData:catalogueData})
  }

  render() {
    let { catalogueData } = this.state
    const { activeId, setActiveId, onChange, showCounter, toHan=false, className} = this.props
    
    
    // catalogueData=fn(catalogueData,0)
    // let activeId = '57'
    return (
      <div className={`app-59ad9e-Details-catalogue ${className}`}>
        {
          catalogueData.map((item:any, i:any) => (
            <div className={`app-59ad9e-Details-catalogue-item ${activeId === item.id ? 'active' : ''}`} key={item.id}>
              <h3 onClick={() => {
                this.triggerCatalogue(item)
                onChange && onChange(item)
                if(item.children.length !== 0) return
                setActiveId(item.id)

              }}>
                <span className='ecode-ellipsis' title={item.name}>{
                    showCounter 
                    &&
                    <span>{toHan?changeNumToHan(item.counter):item.counter}、</span>
                  }
                  {item.name}</span>
                <span>
                  {
                    item.children.length !== 0
                    &&
                    <>{item.showChild ? <span className="icon-coms-down2" /> : <span className="icon-coms-up2" />}</>
                  }
                </span>
              </h3>
              <div className='app-59ad9e-Details-catalogue-child' style={{ display: !item.showChild ? 'block' : 'none' }}>
                {
                  item.children.map((child:any) => (
                    <div className={`app-59ad9e-Details-catalogue-child-item ecode-ellipsis ${activeId === child.id ? 'active' : ''}`}
                      key={child.id}
                      onClick={() => {
                        setActiveId(child.id)
                        this.triggerCatalogue(child)
                      }}>
                      {
                        showCounter && <span>{child.counter} </span>
                      }
                      <span title={child.name}>{child.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>

          ))
        }
      </div>
    )
  }
}

const fn = (arr:any,prev:any) => {
  if(!arr as any instanceof Array) return
  const data = arr.map((item:any,i:number)=>{
    const count = i + 1
    const counter = prev?`${prev}.${count}`:count
    // const prevNameList = []
    let prevName = item.name
    item.children = fn(item.children,counter)
    return {
      ...item,
      showChild: false,
      prevName:item.prevName,
      counter: counter
    }
  })
  return data
}

const changeNumToHan = (num:string | number) => {
  var arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  var arr2 = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿']
  if (!num || isNaN(num as number)) return '零'
  var english = num.toString().split('')
  var result = ''
  for (var i = 0; i < english.length; i++) {
    var des_i = english.length - 1 - i// 倒序排列设值
    result = arr2[i] + result
    var arr1_index: any = english[des_i]
    result = arr1[arr1_index] + result
  }
  result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十') // 将【零千、零百】换成【零】 【十零】换成【十】
  result = result.replace(/零+/g, '零') // 合并中间多个零为一个零
  result = result.replace(/零亿/g, '亿').replace(/零万/g, '万') // 将【零亿】换成【亿】【零万】换成【万】
  result = result.replace(/亿万/g, '亿') // 将【亿万】换成【亿】
  result = result.replace(/零+$/, '') // 移除末尾的零
  // 将【一十】换成【十】
  result = result.replace(/^一十/g, '十')
  return result
}

export default Catalogue