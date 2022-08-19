import { getTld } from "./util.js";
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
        return this.getSupportedTlds().includes(getTld(domain));
    }
}
