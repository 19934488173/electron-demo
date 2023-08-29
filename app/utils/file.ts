import fs, { promises as fsPromiseAPIs } from 'fs';

/** 在 Node 10 之后，提供了 fs Promises API ，这里我们通过官方提供的 API 即可实现 Promise 操作 fs 模块 */
const fileAction = {
  read: (path: string, encoding?: BufferEncoding): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf8' });
  },
  write: (path: string, content: string, encoding: BufferEncoding): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, content, { encoding: encoding || 'utf8' });
  },
  rename: (oldPath: string, newPath: string) => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  delete: (path: string) => {
    return fsPromiseAPIs.unlink(path);
  },
  hasFile: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  canWrite: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  canRead: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
