import { getTld, isPromise } from "./util.js";
// ts-ignore
export class AbstractResolverModule {
    resolver;
    constructor(resolver) {
        this.resolver = resolver;
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
