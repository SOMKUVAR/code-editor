import { output } from '@/atom/output';
import {selector} from 'recoil';


export const getOutput = selector({
    key: 'getOutput', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const outputValue = get(output);
      return outputValue;
    },
});