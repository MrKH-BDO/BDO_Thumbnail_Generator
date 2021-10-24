import {isFileSystemSupported} from "./filesystem.js";

const isSupported = isFileSystemSupported();
console.log("isFileSystemSupported:"+isSupported);
