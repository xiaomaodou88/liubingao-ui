---
title: CardList 卡片列表
nav:
  title: 组件
  path: /components
group:
  title: 组件列表
  order: 2
#   title: 组件列表2
#   order: 3
---

# CardList 卡片列表

CardList 卡片列表

## 代码演示

### 基本用法

<code src="./demo/basic.tsx"></code>

### url跳转

通过传入的url 进行跳转
<code src="./demo/withUrl.tsx"></code>

### 点击事件handleClick

handleClick点击事件,回传当前点击的卡片信息

<code src="./demo/click.tsx"></code>

<API src="./index.tsx"></API>

## item API

|  Name   | Description  |  Type   | Default  |
|  ----  | ----  | ----  | ----  | 
| id  | 唯一值 | string  | (required) |
| image  | 图片地址 | string  | (required) |
| title  | 标题 | string  | (required) |
| describe  | 描述 | string  | (required) |
| showMarkNew  | 是否显示NEW | boolean  | false |
| url  | 点击跳转链接 | string  | -- |
| titleClass  | title类名 | string  | -- |
| handleClick  | 点击的回调,回传当前点击项数据 | Function  | -- |