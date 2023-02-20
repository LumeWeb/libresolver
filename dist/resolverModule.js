import { getTld, isPromise } from "./util.js";
// ts-ignore
export class AbstractResolverModule {
    constructor(resolver) {
        this._resolver = resolver;
    }
    _resolver;
    get resolver() {
        return this._resolver;
    }
    set resolver(value) {
        this._resolver = value;
    }
    getSupportedTlds() {
        return [];
    }
    isTldSupported(domain) {
        let supported = this.getSupportedTlds();
        if (isPromise(supported)) {
            return supported.then((supported) => {
                return supported.includes(getTld(domain));
            });
        }
        return supported.includes(getTld(domain));
    }
}
