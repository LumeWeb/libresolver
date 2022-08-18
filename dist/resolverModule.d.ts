import type { DNSResult, ResolverOptions } from "./types.js";
export default interface ResolverModule {
    constructor(resolver: any): void;
    resolve(domain: string, options: ResolverOptions, bypassCache: boolean): Promise<DNSResult>;
}
export declare abstract class AbstractResolverModule {
    protected resolver: any;
    constructor(resolver: any);
    abstract resolve(input: string, options: ResolverOptions, force: boolean): Promise<DNSResult>;
    getSupportedTlds(): string[];
    isTldSupported(domain: string): boolean;
}
//# sourceMappingURL=resolverModule.d.ts.map