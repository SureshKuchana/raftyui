import { createContext } from '@rhino/utils';

export const [StatProvider, useStatContext] = createContext<StatContext>({
  name: 'StatContext',
  hookName: 'useStatContext',
  providerName: '<Stat />',
});

export interface StatContext {
  type: 'increase' | 'decrease';
}
