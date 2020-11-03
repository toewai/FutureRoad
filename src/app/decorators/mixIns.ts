import * as Parse from 'parse';
export function applyMixIns(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      const prop = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
      if (prop) { Object.defineProperty(derivedCtor.prototype, name, prop); }
    });
  });
}
//

type Constructor<T> = new(...args: any[]) => T;

export function CRUD<T extends Constructor<{}>>(Base: T) {
    return class extends Base {
        [x: string]: any;
        tag: string;
        constructor(...args: any[]) {
            super(...args);
            this.tag = '';
            console.log(...args);
        }
        create(): any{
          return this.save();
        }
        findById(id: string): any {
          const query = new Parse.Query(this);
          query.includeAll();
          return query.get(id);
        }
        find(): any{
          const query = new Parse.Query(this);
          query.includeAll();
          return query.find();
        }
        findBy(obj: any): any{
          const query = new Parse.Query(this);
          query.equalTo(obj.key, obj.value);
          query.includeAll();
          return query.find();
        }
        getAll(pointer: string): any{
          const query = new Parse.Query(this);
          query.include(pointer);
          return query.find();
        }
    };
}
