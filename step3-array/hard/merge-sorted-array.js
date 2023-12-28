const prompt = require("prompt-sync")({ sigint: true });

const length1 = parseInt(prompt("enter the length of the 1st array:"));
const arr1 = [];
for (let i = 0; i < length1; i++) {
    arr1.push(parseInt(prompt("enter the number:")));
}

const length2 = parseInt(prompt("enter the length of the 2nd array:"));
const arr2 = [];
for (let i = 0; i < length2; i++) {
    arr2.push(parseInt(prompt("enter the number:")));
}

//brute ->time=2*O(m+n) and space=O(m+n)
function mergeArray(arr1, arr2, m, n) {
    let i = 0;
    let j = 0;
    let index = 0;
    let mergeArr = [];
    while (i < m && j < n) {
        if (arr1[i] <= arr2[j]) {
            mergeArr.push(arr1[i]);
            i++;
            index++;
        } else {
            mergeArr.push(arr2[j]);
            j++;
            index++;
        }
    }
    while (i < m) {
        mergeArr.push(arr1[i]);
        i++;
        index++;
    }
    while (j < n) {
        mergeArr.push(arr2[j]);
        j++;
        index++;
    }
    for (let k = 0; k < m + n; k++) {
        if (k < m) {
            arr1[k] = mergeArr[k];
        } else {
            arr2[k - m] = mergeArr[k];
        }
    }
}
mergeArray(arr1, arr2, length1, length2);
console.log("Two Arrays after merging ->", arr1, arr2);

//optimal ->time=O(nlogn+mlogm+min(m,n)) and space=O(1)
function mergeArray1(arr1, arr2, m, n) {
    let left = m - 1;
    let right = 0;
    while (left >= 0 && right < n) {
        if (arr1[left] > arr2[right]) {
            let temp = arr1[left];
            arr1[left] = arr2[right];
            arr2[right] = temp;
        } else {
            break;
        }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}
mergeArray1(arr1, arr2, length1, length2);
console.log("Two Arrays after merging1 ->", arr1, arr2);


//optimal2 -> shell sort technique -> time=O((n+m)log(n+m)) and space=O(1)
function mergeArray2(arr1, arr2, m, n) {
    let gap = Math.ceil((m + n) / 2);
    while (gap > 0) {
        let left = 0;
        let right = left + gap;
        while (right < m + n) {
            if (left < m && right >= m) {
                if (arr1[left] > arr2[right - m]) {
                    let temp = arr1[left];
                    arr1[left] = arr2[right - m];
                    arr2[right - m] = temp;
                }
                left++;
                right++;
            } else if (left >= m && right >= m) {
                if (arr2[left - m] > arr2[right - m]) {
                    let temp = arr2[left - m];
                    arr2[left - m] = arr2[right - m];
                    arr2[right - m] = temp;
                }
                left++;
                right++;
            } else {
                if (arr1[left] > arr1[right]) {
                    let temp = arr1[left];
                    arr1[left] = arr1[right];
                    arr1[right] = temp;
                }
                left++;
                right++;
            }
        }
        if (gap == 1) break;
        gap = Math.ceil(gap / 2);
    }
}

mergeArray2(arr1, arr2, length1, length2);
console.log("Two Arrays after merging2 ->", arr1, arr2);