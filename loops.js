// for
const array = [345,345,34534,5345,34657,5756,745,24,4,345,457,6]
let sum = 0
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     console.log(element / 2);
    //     sum += element / 2
    // }
    // console.log(sum);
    
    console.log(array.reduce((a, b) => a + b / 2, 0));
    

// while
// let a = 0
    // while (a < array.length) {
    //     sum += array[a] / 2
    //     a++
    // }
    // console.log(sum);

// do while
// let a = 0
//     do {
//         sum += array[a] / 2
//         a++
//     } while (a < array.length)
//     console.log(sum);

// for in

    const aaa = {
        name: 'john',
        age: 33,
        hobby: ['swimming', 'sleeping', 'sweeping']
    }

    for (const key in aaa) {
        const element = aaa[key];
        console.log(element, key);
    }

// for of
    for (const element of array) {
        
        console.log(element);
    }
