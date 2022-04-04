import { createTestingPinia } from '@pinia/testing';
import { defineStore } from 'pinia';

describe('Pinia Test in Vue2', () => {
  it('should allow override of getters', () => {
    const useMyStore = defineStore('useMyStore', {
      state: () => ({ n: 1 }),
      getters: {
        double: (state) => state.n * 2,
      },
    });
    const pinia = createTestingPinia();
    const myStore = useMyStore(pinia);

    pinia.use(useMyStore);

    expect(myStore.double).toBe(2);
    myStore.double = 3;
    expect(myStore.double).toBe(3);
  });
});
