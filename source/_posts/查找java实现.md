---
title: 查找算法java实现
original: 
date: 2018-3-20 13:58:04
comments:
fancybox:
categories:
- 面试
tags:
- 数据结构
- 算法
- 排序
permalink: 查找java
---


<style>

    img {
        max-width: 100%;
        max-height: 250px;
        padding-right: 60px;
    }
</style>

## 无序链表的顺序查找
### 特点
> - 在含有N对键值的基于（无序）链表的符号表中，未命中的查找和插入操作都需要N次比较。命中的查找在最坏情况下需要N次比较。特别的，向一个空表中插入N个不同的键需要$$~N^2/2次比较$$

### 实现
```java
public class SequentialSearchST<Key,Value>{
    private Node first;
    private class Node{
        Key key;
        Value val;
        Node next;
        public Node(Key key,Value val,Node next){
            this.key=key;
            this.val=val;
            this.next=next;
        }
    }
    public Value get(Key key){
        for(Node x=first;x!=null;x=x.next){
            if(key.equals(x.key)){
                return x.val;
            }
        }
        return null;
    }
    public void put(Key key,Value val){
        for(Node x=first;x!=null;x=x.next){
            if(key.equals(x.key)){
                x.val=val;
                return;
            }
        }
        first=new Node(key,val,first);
    }
}
```
<!--more-->
## 有序数组的二分查找
### 特点
> - 在N个键的有序数组中进行二分查找最多需要(lgN+1)次比较（无论是否成功）。
- 向大小为N的有序数组中插入一个新的元素在最坏情况下需要访问~2N次数组，因此向一个空符号表中插入N个元素在最坏情况下需要访问$$~N^2次数组$$

### 实现
```java
public class BinarySearchST<Key extends Comparable<Key>, Value>{
    private Key[] keys;
    private Value[] vals;
    private int N;
    public BinarySearchST(int capacity){
        keys=(Key[])new Comparable[capacity];
        vals=(Value[])new Object[capacity];
    }
    public int size(){
        return N;
    }
    public Value get(Key key){
        if(isEmpty()) return null;
        int i=rank(key);
        if(i<N&&keys[i].compareTo(key)==0) return vals[i];
        else return null;
    }
    public int rank(Key key){
        int lo=0,hi=N-1;
        while(lo<=hi){
            int mid=lo+(hi-lo)/2;
            int cmp=key.compareTo(keys[mid]);
            if(cmp<0) hi=mid-1;
            else if(cmp>0) lo=mid+1;
            else return mid;
        }
        return lo;
    }
    public void put(Key key,Value val){
        int i=rank(key);
        if(i<N&&keys[i].compareTo(key)==0){
            vals[i]=val; return;
        }
        for(int j=N;j>i;j--){
            keys[j]=keys[j-1];
            vals[j]=vals[j-1];
        }
        keys[i]=key; vals[i]=val;
        N++;
    }
    public Iterable<Key> keys(Key lo,Key hi){
        Queue<Key> q=new Queue<Key>();
        for(int i=rank(lo);i<rank(hi);i++){
            q.enqueue(keys[i])
        }
        if(contains(hi)){
            q.enqueue(keys[rank(hi)]);
        }
    }
}
```

## 预览
### 比较
![](/resource/微信截图_20180320172415.png)

## 二叉查找树
### 思路
> 使用每个结点含有两个链接的二叉查找树高效实现符号表。

### 特点
![](/resource/微信截图_20180320182015.png)![](/resource/微信截图_20180321182858.png)
> - 在由N个随机键构造的二叉查找树中，查找命中平均所需的比较次数为~2lnN（约1.39lgN）。
- 在由N个随机键构造的二叉查找树中插入和查找未命中平均所需的比较次数为~2lnN（约1.39lgN）。
- 虽然查找命中比二分查找高约39%，但是插入操作访问数组的次数是线性级别的。
- 在一颗二叉查找树中，所有操作在最坏情况下所需的时间都和树的高度成正比。


### 实现
![](/resource/微信截图_20180321174624.png)![](/resource/微信截图_20180321174731.png)![](/resource/微信截图_20180321174841.png)![](/resource/微信截图_20180321174958.png)
```java
public class BST<Key extends Compareable<Key>,Value>{
    private Node root;
    private class Node{
        private Key key;
        private Value val;
        private Node left,right;
        int N;
        public Node(Key key,Value val,int N){
            this.key=key;
            this.val=val;
            this.N=N;
        }
    }
    public int size(){
        return size(root);
    }
    private int size(Node x){
        if(x==null) return 0;
        else return x.N;
    }
    public Value get(Key key){
        return get(root,key);
    }
    private Value get(Node x,Key key){
        if(x==null) return null;
        int cmp=key.compareTo(x.key);
        if(cmp>0) return get(x.right,key);
        else return get(x.left,key);
        else return x.val;
    }
    public void put(Key key,Value val){
        // 查找key，找到并更新它的值，否则创建一个新结点。
        root=put(root,key,val);
    }
    private Node put(Node x,Key key,Value val){
        //如果key存在以x为根结点的子树中则更新它的值；
        //否则将以key和val为键值对的新结点插入到该子树中。
        if(x==null) return new Node(key,val,1);
        int cmp=key.compareTo(x.key);
        if(cmp<0) x.left=put(x.left,key,val);
        else if(cmp>0) x.right=put(x.right,key,val);
        else x.val=val;
        x.N=size(x.left)+size(x.right)+1;
        return x;
    }
    public Key min(){
        return min(root).key;
    }
    private Node min(Node x){
        if(x.left==null) return x;
        return min(x.left);
    }
    public Key floor(Key key){
        Node x=floor(root,key);
        if(x==null) return null;
        return x.key;
    }
    private Node floor(Node x,Key key){
        /**
        如果 key 小于根节点的 key，那么小于等于 key 的最大键节点一定在左子树中；如果 key 大于根节点的 key，只有当根节点右子树中存在小于等于 key 的节点，小于等于 key 的最大键节点才在右子树中，否则根节点就是小于等于 key 的最大键节点。
        **/
        if(x==null) return null;
        int cmp=key.compareTo(x.key);
        if(cmp==0) return x;
        if(cmp<0) return floor(x.left,key);
        Node t=floor(x.right,key);
        if(t!=null) return t;
        else return x;
    }
    public Key select(int k){
        return select(root,k).key;
    }
    private Node select(Node x,int k){
        // 返回排名为k的结点
        if(x==null) return null;
        int t=size(x.left);
        if(t>k) return select(x.left,k);
        if(t==k) return x;
        if(t<k) return select(x.right,k-t-1);
    }
    public int rank(Key key){
        return rank(key,root);
    }
    private int rank(Key key,Node x){
        // 返回以x为根结点的子树中小于x的key的数量
        if(x==null) return 0;
        int cmp=key.compareTo(x.key);
        if(cmp==0) return size(x.left);
        else if(cmp<0) return rank(key,x.left);
        else return rank(key,x.right)+size(x.left)+1;
    }
    public void deleteMin(){
        root=deleteMin(root);
    }
    private Node deleteMin(Node x){
        // 令指向最小节点的链接指向最小节点的右子树。
        if(x.left==null) return x.right;
        x.left=deleteMin(x.left);
        x.N=size(x.left)+size(x.right)+1;
        return x;
    }
    public delete(Key key){
        root=delete(root,key);
    }
    private Node delete(Node x,Key key){
        // 如果待删除的节点只有一个子树，那么只需要让指向待// 删除节点的链接指向唯一的子树即可；否则，让右子树// 的最小节点替换该节点。
        if(x==null) return null;
        int cmp=key.compareTo(x.key);
        if(cmp<0) x.left=delete(x.left,key);
        else if(cmp>0) x.right=delete(x.right,key);
        else {
            if(x.right==null) return x.left;
            if(x.left==null) return x.right;
            Node t=x;
            x=min(t.right);
            x.right=deleteMin(t.right);
            x.left=t.left;
        }
        x.N=size(x.left)+size(x.right)+1;
        return x;
    }
    public Iterable<Key> keys(){
        return keys(min(),max());
    }
    public Iterable<Key> keys(Key lo,Key hi){
        Queue<Key> queue=new Queue<Key>();
        keys(root,queue,lo,hi);
        return queue;
    }
    private void keys(Node x,Queue<Key> queue,Key lo,Key hi){
        // 利用二叉查找树中序遍历的结果为有序序列的特点。
        if(x==null) return;
        int cmplo=lo.compareTo(x.key);
        int cmphi=hi.compareTo(x.key);
        // 查找左子树
        if(cmplo<0) keys(x.left,queue,lo,hi);
        // 查找根结点
        if(cmplo<=0&&cmphi>=0) queue.enqueue(x.key);
        // 查找右子树
        if(cmphi>0) keys(x.right,queue,lo,hi);
    }
}
```