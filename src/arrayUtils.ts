export const min = (data: number[]) => Math.min(...data);
export const max = (data: number[]) => Math.max(...data);
export const toBig = (data: number[]): number[] => data.sort((a, b) => a - b);
export const toSmall = (data: number[]): number[] => data.sort((a, b) => b - a);
