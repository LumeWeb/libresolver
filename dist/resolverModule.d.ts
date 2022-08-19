import type { DNSResult, ResolverOptions } from "./types.js";
import { ResolverRegistry } from "@lumeweb/resolver";
export interface ResolverModule {
  constructor(resolver: ResolverRegistry): any;
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  getSupportedTlds(): string[];
}
export declare abstract class AbstractResolverModule implements ResolverModule {
  protected resolver: ResolverRegistry;
  constructor(resolver: ResolverRegistry);
  abstract resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  getSupportedTlds(): string[];
  isTldSupported(domain: string): boolean;
}
//# sourceMappingURL=resolverModule.d.ts.map
