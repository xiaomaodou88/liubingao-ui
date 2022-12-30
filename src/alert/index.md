---
title: Alert 警告提示
nav:
  title: 组件
  path: /components
group: 
  title: 组件列表
  order: 1
---

# Alert 警告提示

警告提示，展现需要关注的信息。

## 代码演示

### 基本用法

<code src="./demo/basic.tsx"></code>

<API src="./index.tsx"></API>


## open Option API

引入组件后直接调用Alert.open(option)

|  Name   | Description  |  Type   | Default  |
|  ----  | ----  | ----  | ----  | 
| kind  | 类型 | info,success,error,warning  | 'info' |
| title  | 标题 | reactDom  | - |
| content  | 内容 | reactDom  | - |
| close  | 关闭后回调 | Function  | - |

