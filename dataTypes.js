// Data types

// Premitive
    // String
        // '4444'  "      "  ``
        //  4 + 4 + '4' = '84'
        const str = '      limdi Game gadi mali      Game'
        console.log('length =====>', str.length);
        console.log('charAt ======>', str.charAt(11));
        console.log('At ======>', str.at(11));
        console.log('[] ======>', str[11]);
        console.log('charAt ======>', str.charCodeAt(11));
        console.log('concat =======>', str.concat(' ', 'ane', ' ', 'accident thayu'));
        console.log('concat =======>', str + ' ' + 'ane' + ' ' + 'accident thayu');
        console.log('slice ====>', str.slice(undefined, -10));
        console.log('substring ======>', str.substring(3, 10));
        console.log('substring ======>', str.toUpperCase());
        console.log('substring ======>', str.substring(3, 10));
        console.log('trim ======>', str.trim());
        console.log('trim start ======>', str.trimStart());
        console.log('trim end ======>', str.trimEnd());
        console.log('pad start ======>', str.padStart(50, '*'));
        console.log('pad end ======>', str.padEnd(50, '*'));
        console.log('replace ======>', str.replace('l', 'L'));
        console.log('replace ======>', str.replaceAll('l', 'L'));
        console.log('split ======>', str.split(' '));

        console.log('indexof =====>', str.indexOf('Game'));
        console.log('lastIndexof =====>', str.lastIndexOf('Game'));
        console.log('include =====>', str.includes('game'));
        console.log('startsWith =====>', str.startsWith('Game'));
        console.log('endsWith =====>', str.endsWith('Game'));
        
        const iq = 10
        const str2 = `this person is having an IQ of ${iq}`
        console.log(str2);
        
        
    // Number
        // 234234234 || 23234.4454 || -234234.234 || -2^53 to 2^53
        const num = 1000000000000000
        const fltNum = 3.3535345
        console.log('exponential ======>', num.toExponential(1))
        console.log('fltnum ======>', fltNum.toFixed(3))


    // Null
        // null
        const time = null

    // Undefined
        // undefined

    // Boolean
        // true || false

    // BigInt
        // 1n

    // Symbol
        // Symbol() === Symbol() = false

// NOn-premitive / Complex
    // Object
      const person = {
            fName: 'John',
            age: 30,
            address: {
                city: 'Ahmedabad',
                state: 'Gujarat'
            },
            height: 5.11,
            isActive: true,
            hobbies: ['coding', 'reading', 'gaming'] 
        }
        person.hobbies = ['coding', 'reading', 'gaming', 'riding a bike']
        console.log("🚀 ~ person:", person)
        console.log("🚀 ~ person.name:", person.isActive)
        console.log("🚀 ~ person.name:", person['height'])
    //    const person2 = Object.assign(person, { name: 'Pratik', age: 30, address: { city: 'Ahmedabad', state: 'Gujarat' }, height: 5.11, isActive: true, hobbies: ['coding', 'reading', 'gaming'] })
    //    delete person2.name
    //    console.log("🚀 ~ person2:", person2)

        // convert object to string
            console.log(JSON.stringify(person))
            console.log(JSON.parse(JSON.stringify(person)))

            // Object.keys()
            console.log("🚀 ~ Object.keys():", Object.keys(person))
            // Object.values()
            console.log("🚀 ~ Object.values():", Object.values(person))
            // Object.entries()
            console.log("🚀 ~ Object.entries():", Object.entries(person))

            // object destructuring
            const { fName, hobbies, age } = person

            const name = 'test'
            console.log("🚀 ~ name:", name)
            
            console.log("🚀 ~ name:", fName)
            
    // Array
        const numbers = [1, 2, 3, 4, 5];
    // Function
        // normal function
        const test = 'ds'
            function handleChange(arg1, a2, a3, a4, a5, a6, a7, a8) {
                // it will run only when you call the function
                console.log('<========== inside function ======>', arg1, a2, a3, a4, a5, a6, a7, a8)
            }
            handleChange(test, 10, true, 'false', [], {}, 1n, () => {})
            
        // arrow function
            const handleClick = () => {
                console.log('function is about click')
                return 'returned value'
            }

        // self invoked funtion
            (function () {
                // it will run only when you call the function
                console.log('<========== self invoked inside function ======>')
            })()
            
        // callback function
            // handleChange(test, 10, true, [], {}, 1n, _, handleClick())
            // callback hell

        // async function
            // async function adsad() {
            //     await ashdadhaiudhaisd
            //     toast
            // }

            // const asfadda = async () => {

            // } 