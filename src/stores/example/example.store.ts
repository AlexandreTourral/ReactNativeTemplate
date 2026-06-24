import { create } from 'zustand';

import type { ExampleState } from './example.model';

export const useExampleStore = create<ExampleState>()(() => ({
  // value: '',
  // setValue: (value) => set({ value }),
}));
