// Code your solution here
let findMatching = (drivers, string) => {
    let match = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase();
    })
    return match;
}

let fuzzyMatch = (drivers, string) => {
    let match = drivers.filter(initial => {
        return initial.charAt(0) === string.charAt(0);
    })
    return match;
}

let matchName = (drivers, string) => {
    let match = drivers.filter(driver => {
        return driver.name === string;
    })
    return match;
}