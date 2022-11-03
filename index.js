

function myEach(collection, callback){
    let arr = Object.values(collection)
    arr.forEach(ele => callback(ele))
    return collection
}

function myMap (collection, callback){
    let arr = Object.values(collection)
    let newArr = arr.map(ele => callback(ele) )
    return newArr
}

function myReduce(collection, callback, acc){
    let arr = Object.values(collection)
    if (acc === undefined){
        let reducedValue = arr.reduce((prev, current) => callback(prev, current, collection))
        return reducedValue
    }
    else{
    let reducedValue = arr.reduce((prev, current) => callback(prev, current, collection), acc)
        return reducedValue
    } 
    }
    
function myFind(collection, predicate){
        let arr = Object.values(collection)
        let foundItem = arr.find(element => predicate(element), arr)
            return foundItem
    }

function myFilter(collection, predicate){
    let arr = Object.values(collection)
    let newArr = arr.filter(element => predicate(element))
    return newArr
}

function mySize(collection){
    let arr = Object.keys(collection)
    return arr.length
}

const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }

const myLast = function(arr, start=false){
    return (start) ? arr.slice(arr.length-start, arr.length): arr[arr.length-1]
}


// function myFirst(array, n){
//     if (n > 0){
//         return array.slice(n)
//     }
//     else{
//         return array[0]
//     }
    
// }




function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}