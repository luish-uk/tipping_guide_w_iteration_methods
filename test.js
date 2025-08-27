const addTwo = num => {
    num += 2
    return num
} 

const checkConistentOutput = (func, val) => {
    const checkA = val + 2
    const checkB = func(val)
    return checkA === checkB ? func(val) : 'Inconsistent results'
}

console.log(checkConistentOutput(addTwo, 2))


