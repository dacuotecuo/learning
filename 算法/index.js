/**
 * 冒泡排序
 * @param {*} arr 数组
 */
 function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 双循环，交换两者之间的顺序
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
}

/**
 * 选择排序
 * @param {*} arr 数组
 */
function selectionSort(arr) {
  var len = arr.length
  var minIndex, temp
  for (var i = 0; i < len - 1; i++) {
    // 找出数据最大的索引，然后和当前的数据进行对换
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr;
}

/**
 * 插入排序
 * @param {*} arr
 */
function insertionSort(arr) {
  var len = arr.length
  var preIndex, current
  for (var i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current;
  }
  return arr
}

/**
 * shell排序
 * @param {*} arr
 */
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1,
    compx = 3
  while (gap < len / compx) { //动态定义间隔序列
    gap = gap * compx + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / compx)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

/**
 * 归并排序
 * @param {Array} arr
 */
function mergeSort(arr) { // 采用自上而下的递归方法
  var len = arr.length
  if (len < 2) {
    return arr
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length)
    result.push(left.shift())

  while (right.length)
    result.push(right.shift())

  return result
}

/*******************************************快排*******************************************/
function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right

  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) { // 分区操作
  var pivot = left, // 设定基准值（pivot）
    index = pivot + 1
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partition2(arr, low, high) {
  let pivot = arr[low]
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high
    }
    arr[low] = arr[high]
    while (low < high && arr[low] <= pivot) {
      ++low
    }
    arr[high] = arr[low]
  }
  arr[low] = pivot
  return low
}

function quickSort2(arr, low, high) {
  if (low < high) {
    let pivot = partition2(arr, low, high)
    quickSort2(arr, low, pivot - 1)
    quickSort2(arr, pivot + 1, high)
  }
  return arr
}

/**************************************************************************************/

// const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].reverse()
const arr = []

while (arr.length < 1e6) {
  arr.push(Number((Math.random() * 1e4).toFixed(0)))
}

console.log('start', arr)
const start = Date.now()
quickSort(arr)
console.log(Date.now() - start, arr)