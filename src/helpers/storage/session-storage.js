import { defineStorageInterface } from './utils';

const SessionStorage = defineStorageInterface(window.sessionStorage);

export default SessionStorage;
