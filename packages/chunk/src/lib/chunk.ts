/* eslint-disable @typescript-eslint/no-explicit-any */
export function chunk(arr: any[], size: number): any[][] {
  return arr.reduce((chunkedArray: any[][], element: any) => {
    const lastChunk = chunkedArray[chunkedArray.length - 1];
    if (!lastChunk || lastChunk.length === size) chunkedArray.push([element]);
    else lastChunk.push(element);
    return chunkedArray;
  }, []);
}
