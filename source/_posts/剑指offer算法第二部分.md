---
title: 剑指offer算法题（二）
original: 
date: 2018-2-21 11:04:04
comments: 
fancybox: 
categories:
- 算法
tags:
- 数据结构
- 设计模式
---
## 链表操作
### 链表末尾添加节点

```c++
struct ListNode
{
    int m_nValue;
    ListNode* m_pNext;
};
void AddToTail(ListNode** pHead, int value)
{
    ListNode *pNew = new ListNode();
    pNew->m_nValue = value;
    pNew->m_pNext = NULL;
    if(*pHead == NULL)
    {
        *pHead = pNew;
    }
    else
    {
        ListNode* pNode = *pHead;
        while(pNode->m_pNext != NULL)
        {
            pNode = pNode->m_pNext;
        }
        pNode->m_pNext = pNew;
    }
}
```
<!--more-->

### 删除含有某值的节点

```c++
void RemoveNode(ListNode** pHead, int value)
{
    if(*pHead == NULL || **pHead == NULL)
    {
        return;
    }
    ListNode *isToBeDeteled = NULL;
    if((*pHead)->m_nValue == value)
    {
        isToBeDeleted = *pHead;
        *pHead = (*pHead)->m_pNext;
    }
    else
    {
        ListNode *pNode = *pHead;
        while(pNode->m_pNext != NULL && pNode->m_pNext->m_nValue != value)
        {
            pNode = pNode->m_pNext;
        }
        if(pNode->m_pNext != NULL && pNode->m_pNext->m_nValue == value)
        {
            isToBeDeleted = pNode->m_pNext;
            pNode->m_pNext = pNode->m_pNext->m_pNext;
        }
    }
    if(isToBeDeleted != NULL)
    {
        delete isToBeDeleted;
        isToBeDeleted = NULL;
    }
}
```
## 从尾到头打印链表
>题目描述：输入一个链表，从尾到头打印链表每个节点的值。

```
void Pr
```
