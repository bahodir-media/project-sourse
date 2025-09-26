import { deleteAsync } from 'del';

export function clean() {
  return deleteAsync(['build']);
}
