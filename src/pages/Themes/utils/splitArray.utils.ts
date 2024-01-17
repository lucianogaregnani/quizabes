// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function splitArray(arrayOriginal:any[], tamanoSubarray:number) {
    const array = [];
    
    for (let i = 0; i < arrayOriginal.length; i += tamanoSubarray) {
        array.push(arrayOriginal.slice(i, i + tamanoSubarray));
    }
    
    return array;
}