function takesTheArrayOfString(array: string[], start: number, stop: number) {
    let substringArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
        substringArray.push(array[i].substring(start, stop));
    }
    return substringArray;
}

const ShortStringArray = takesTheArrayOfString(["Mango", "Apple", "Banana"], 0, 3);
console.log(ShortStringArray);
