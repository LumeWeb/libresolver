import type { DNSResult, ResolverOptions } from "./types.js";
declare class ResolverRegistry {
  get resolvers(): Set<ResolverModule> | Promise<Set<ResolverModule>>;
  resolve(
    domain: string,
    options?: ResolverOptions,
    bypassCache?: boolean
  ): Promise<DNSResult>;
  register(resolver: ResolverModule): void;
  clear(): void;
}
export interface ResolverModule {
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  getSupportedTlds(): string[];
  getSupportedTlds(): Promise<string[]>;
  getSupportedTlds(): any;
}
export declare abstract class AbstractResolverModule {
  constructor(resolver?: ResolverRegistry);
  private _resolver?;
  get resolver(): ResolverRegistry;
  set resolver(value: ResolverRegistry);
  abstract resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  getSupportedTlds(): string[];
  getSupportedTlds(): Promise<string[]>;
  isTldSupported(domain: string): Promise<boolean>;
  isTldSupported(domain: string): boolean;
}
export {};
//# sourceMappingURL=resolverModule.d.ts.map
