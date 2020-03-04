import { defineStorageInterface } from './utils';

const LocalStorage = defineStorageInterface(window.localStorage);

export default LocalStorage;
