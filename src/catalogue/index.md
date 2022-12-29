---
title: Catalogue 目录
nav:
  title: 组件
  path: /components
group: 
  title: 组件列表
  order: 1
---

# Catalogue 目录

Catalogue 目录。

## 代码演示

### 基本用法

<code src="./demo/basic.tsx"></code>

### 展示计数器
showCounter 可开启计数

<code src="./demo/showCounter.tsx"></code>

### 一级目录汉字计数计数器
toHan 一级目录可转换为汉字计数 showCounter为true的情况下,toHan属性才生效

<code src="./demo/toHan.tsx"></code>

<API src="./index.tsx"></API>


## Item API

|  Name   | Description  |  Type   | Default  |
|  ----  | ----  | ----  | ----  | 
| id  | 唯一值 | string 或 number  | (required) |
| name  | 目录名称 | string  | (required) |
| children  | 二级目录 | 包含id和name | [] |

