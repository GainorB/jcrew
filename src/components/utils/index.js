import { v1 } from 'uuid';

export const removeWhiteSpace = str => str.replace(/\s/g, '_');

export const key = () => v1();
