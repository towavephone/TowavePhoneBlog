---
title: 剑指offer算法题（一）
original: 
date: 2018-2-8 22:04:33
comments: 
fancybox: 
categories:
- 算法
tags:
- 数据结构
- 设计模式
- 单例模式
---
## 单例模式
### 加同步锁前两次后判断实例是否存在
>Singleton加锁模式确保多线程下只创建一个实例

>缺点：实现复杂，容易出错
```
public sealed class Singleton3
{
    private Singleton3()
    {
    }
    private static object syncObj = new Object();
    private static Singleton3 instance = null;
    public static Singleton3 Instance
    {
        get
        {
            if(instance == null)
            {
                lock(syncObj){
                    if(instance == null)
                    {
                        instance = new Singleton3();
                    }
                }
            }
            return instance;
        }
    }
}
```
<!--more-->

### 利用静态构造函数（C#版）
>C#语法中有一个函数能够确保只调用一次，即静态构造函数

>缺点：第一次用到Singleton4的时候就被创建，不能按需创建

```
public sealed class Singleton4
{
    private Sinleton4(){

    }
    private static Singleton4 instance = new Singleton4();
    public static Sinleton4 Instance
    {
        get
        {
            return instance;
        }
    }
}

### 实现按需创建实例
```
public sealed class Sinleton5
{
    Singleton5()
    {
    }
    public static Singleton5 Instance
    {
        get
        {
            return Nested.instance;
        }
    }
    class Nested
    {
        static Nested()
        {
        }
        internal static readonly Sington5 instance = new Singleton5();
    }
}
