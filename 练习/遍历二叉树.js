var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}
// 先序 递归
var result = [];
let dfs = function (node) {
    if (node) {
        result.push(node.value);
        dfs(node.left);
        dfs(node.right);
    }
}
dfs(tree);
console.log(result);

// 先序 非递归
// 利用栈：将遍历到的结点都依次存入栈中，拿结果时从栈中访问
let dfs2 = function (nodes) {
    let result = [];
    let stack = [];
    stack.push(nodes);
    while (stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
        let node = stack.pop(); // 取的是栈中最后一个j
        result.push(node.value);
        if (node.right) stack.push(node.right); // 先压入右子树
        if (node.left) stack.push(node.left); // 后压入左子树
    }
    return result;
}
dfs2(tree);

// 中序 递归
var result = [];
let dfsMid = function (node) {
    if (node) {
        dfsMid(node.left);
        result.push(node.value); // 直到该结点无左子树 将该结点存入结果数组 接下来并开始遍历右子树
        dfsMid(node.right);
    }
}
dfsMid(tree);
console.log(result);

// 中序 非递归
function dfsMid1(node) {
    let result = [];
    let stack = [];
    while (stack.length || node) { // 是 || 不是 &&
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            result.push(node.value);
            //node.right && stack.push(node.right);
            node = node.right; // 如果没有右子树 会再次向栈中取一个结点即双亲结点
        }
    }
    return result;
}
dfsMid1(tree);

// 后序 递归
result = [];
function dfsBack(node) {
    if (node) {
        dfsBack(node.left);
        dfsBack(node.right);
        result.push(node.value);
    }
}
dfsBack(tree);
console.log(result);

// 后序 非递归
// 先把根结点和左树推入栈，然后取出左树，再推入右树，取出，最后取根结点。
function dfsBack1(node) {
    let result = [];
    let stack = [];
    stack.push(node);
    while (stack.length) {
        // 不能用node.touched !== 'left' 标记‘left’做判断，
        // 因为回溯到该结点时，遍历右子树已经完成，该结点标记被更改为‘right’ 若用标记‘left’判断该if语句会一直生效导致死循环
        if (node.left && !node.touched) { // 不要写成if(node.left && node.touched !== 'left')
            // 遍历结点左子树时，对该结点做 ‘left’标记；为了子结点回溯到该（双亲）结点时，便不再访问左子树
            node.touched = 'left';
            node = node.left;
            stack.push(node);
            continue;
        }
        if (node.right && node.touched !== 'right') { // 右子树同上
            node.touched = 'right';
            node = node.right;
            stack.push(node);
            continue;
        }
        node = stack.pop(); // 该结点无左右子树时，从栈中取出一个结点，访问(并清理标记)
        // 可以不清理不影响结果 只是第二次对同一颗树再执行该后序遍历方法时，结果就会出错啦因为你对这棵树做的标记还留在这棵树上
        node.touched && delete node.touched; 
        result.push(node.value);
        node = stack.length ? stack[stack.length - 1] : null;
        //node = stack.pop(); 这时当前结点不再从栈中取（弹出），而是不改变栈数据直接访问栈中最后一个结点
        //如果这时当前结点去栈中取（弹出）会导致回溯时当该结点左右子树都被标记过时 当前结点又变成从栈中取会漏掉对结点的访问（存入结果数组中）
    }
    return result; // 返回值
}
dfsBack1(tree);

// 层序 递归
result = [];
let stack = [tree]; // 先将要遍历的树压入栈
let count = 0; // 用来记录执行到第一层
let bfs = function () {
    let node = stack[count];
    if (node) {
        result.push(node.value);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        count++;
        bfs();
    }
}
bfs();
console.log(result);

// 层序 非递归
function bfs1(node) {
    let result = [];
    let queue = [];
    queue.push(node);
    let pointer = 0;
    while (pointer < queue.length) {
        let node = queue[pointer++]; // // 这里不使用 shift 方法（复杂度高），用一个指针代替
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}
bfs1(tree);