---
title: 剑指offer算法题——排序
original: 
date: 2018-2-25 17:18:54
comments: 
fancybox: 
categories:
- 面试
tags:
- 数据结构
- 算法
- 排序
permalink: 剑指offer5
---
## 快速排序

### 递归式

```c++
#include<iostream>
#include<stack>
using namespace std;

int partition(int a[], int left, int right)
{
    // 基准数
    int tmp = a[left];
    while(left < right)
    {
        while(a[right] >= tmp && left < right)
        {
            right--;
        }
        if(left < right)
        {
            // 小于基准的移到左端
            a[left] = a[right];
        }
        while(a[left] <= tmp && left < right)
        {
            left++;
        }
        if(left < right)
        {
            // 大于基准的移到右端
            a[right] = a[left];
        }
    }
    // 最终将基准数归位
    a[left] = tmp;
    return left;
}

void quickSort(int a[], int left, int right) {
    int index;
    if(left > right)
    {
        return;
    }
    index = partition(a, left, right);
    quickSort(a, left, index - 1);
    quickSort(a, index + 1, right);
}
int main()
{
    int a[1000];
    int n = 0;
    while(cin>>n)
    {
        for(int i = 0; i < n; i++)
        {
            cin>>a[i];
        }
        if(n > 0)
        {
            quickSort(a, 0, n - 1);
            for(int i = 0; i < n; i++)
            {
                cout<<a[i]<<' ';
            }
        }
        cout<<endl;
    }
    return 0;
}

```

<!--more-->

### 非递归式

```c++
void quickSort(int a[], int left, int right) {
    if(left > right)
    {
        return;
    }
    stack<int> stack1;
    // 根据栈的先进后出的特点，栈中存放的下标应越大的越先进栈
    // 理由：根据出栈时由小而大判断
    stack1.push(right);
    stack1.push(left);
    while(stack1.size() > 0)
    {
        int i = stack1.top();
        stack1.pop();
        int j = stack1.top();
        stack1.pop();
        int index = partition(a, i, j);
        if(i < index - 1)
        {
            stack1.push(index - 1);
            stack1.push(i);
        }
        if(j > index + 1)
        {
            stack1.push(j);
            stack1.push(index + 1);
        }
    }
}
```

