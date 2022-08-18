import type { DNSResult, ResolverOptions } from "./types.js";
import { ResolverRegistry } from "@lumeweb/resolver";
export interface ResolverModule {
  constructor(resolver: ResolverRegistry): void;
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
}
export declare abstract class AbstractResolverModule {
  protected resolver: ResolverRegistry;
  constructor(resolver: ResolverRegistry);
  abstract resolve(
    input: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  getSupportedTlds(): string[];
  isTldSupported(domain: string): boolean;
}
//# sourceMappingURL=resolverModule.d.ts.map
