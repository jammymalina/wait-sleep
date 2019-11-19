export const sleep = async (timeoutMS: number) => new Promise(resolve => setTimeout(resolve, timeoutMS));
export const wait = sleep;
