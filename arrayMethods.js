const arrOfNum = [1,3,4,5,6,7,[8,[[600],5],3],2,4,5,6].flat(4)
arrOfNum[0] = 100

// document.write(arrOfNum)

// basic methods
    // console.log("🚀 ~ arrOfNum:", arrOfNum.length)
    // console.log("🚀 ~ arrOfNum:", arrOfNum.toString())
    // console.log("🚀 ~ arrOfNum:", arrOfNum.at(4))
    // console.log("🚀 ~ arrOfNum:", arrOfNum.join(' | '))
    // // console.log("🚀 ~ arrOfNum:", arrOfNum.pop())
    // // console.log("🚀 ~ arrOfNum:", arrOfNum.push(10))
    // // console.log("🚀 ~ arrOfNum:", arrOfNum.shift())
    // // console.log("🚀 ~ arrOfNum:", arrOfNum.unshift(4))
    // // delete arrOfNum[2]
    // console.log("🚀 ~ arrOfNum:", arrOfNum.concat(arrOfNum, [34, 44], [44], []))
    // // console.log("🚀 ~ arrOfNum:", arrOfNum.copyWithin(4, 0, 3))
    // console.log("🚀 ~ arrOfNum:", arrOfNum.flat(3))
    // console.log("🚀 ~ arrOfNum:", arrOfNum.slice(3, 6))
    // console.log("🚀 ~ arrOfNum:", arrOfNum.splice(3, 1, 111, 44))
    // console.log("🚀 ~ arrOfNum:", arrOfNum.toSpliced(3, 1, 111, 44))

// Search methods
    // console.log('====>', arrOfNum.flat(4).indexOf(600))
    // console.log('====>', arrOfNum.flat(4).lastIndexOf(600))
    // console.log('====>', arrOfNum.flat(4).includes(600))
    // console.log('====>', arrOfNum.flat(4).find((element, index, array) => {
    //     console.log(element, index, array);
    //     return index > 5
    // })) // this will return element always
    // console.log('====>', arrOfNum.flat(4).findIndex((element, index, array) => {
    //     console.log(element, index, array);
    //     return element > 5
    // })) // this will return index always
    // console.log('====>', arrOfNum.flat(4).findLast((element, index, array) => {
    //     console.log(element, index, array);
    //     return index > 5
    // })) // this will start checking from end and return element always
    // console.log('====>', arrOfNum.flat(4).findLastIndex((element, index, array) => {
    //     console.log(element, index, array);
    //     return element > 5
    // })) // this will start checking from end and return index always

    const arrOfAlpha = ['test', 'john', 'donald', 'modi', 'meloni']
    const arrOfObj = [
        {name: 'modi'},
        {name: 'meloni'},
        {name: 'yogi'},
        {name: 'lalu'},
    ]

    // Sort methods
        // console.log('sort', arrOfAlpha.sort());
        // console.log('sort', arrOfNum.flat(4).sort((a, b) => a > b ? -1 : 1)); // descending
        // console.log('sort', arrOfNum.flat(4).sort((a, b) => a < b ? -1 : 1)); // ascending
        // // console.log('sort', arrOfObj.sort((a, b) => a.name < b.name ? -1 : 1)); // ascending
        // // console.log('sort', arrOfObj);
        // console.log('sort', arrOfObj.toSorted((a, b) => a.name < b.name ? -1 : 1)); // ascending
        // console.log('sort', arrOfObj);
        
        // console.log('sort', arrOfAlpha.reverse());
        
    // Math
        const numm = 64
        // console.log('ceil=>', Math.ceil(numm));
        // console.log('floor=>', Math.floor(numm));
        // console.log('cbrt=>', Math.cbrt(numm));
        // console.log('sqrt=>', Math.sqrt(numm));
        // console.log('random=>', Math.random());
        // console.log('min=>', Math.min(23,65,43,34,23,45,57,78,453,423,34));
        // console.log('max=>', Math.max(23,65,43,34,23,45,57,78,453,423,34));
        
    // Iteration methods
    
    let newArr = []
    arrOfNum.forEach((element, index, ar) => {
        console.log(element * 2, index, ar);
        newArr.push(element * 2)
    })
    console.log(newArr);

    console.log('mappng ====>', arrOfNum.map((e, i, a) => e * 2))
    
    console.log('mappng ====>', arrOfNum.filter((e, i, a) => e > 10))
    