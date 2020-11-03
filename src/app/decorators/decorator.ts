import * as Parse from 'parse';
export function column() {
  return (target: any, key: string | symbol) => {
    Object.defineProperty(target, key, {
        get() {
          return this.get(key);
        },
        set(val) {
          this.set(key, val);
        },
        enumerable: true,
        configurable: true,
      });
  };
}
