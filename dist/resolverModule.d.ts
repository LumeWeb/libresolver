import type { DNSResult, ResolverOptions } from "./types.js";
import type { RpcNetwork } from "@lumeweb/dht-rpc-client";
declare class ResolverRegistry {
  private _resolvers;
  private _rpcNetwork;
  constructor(network?: RpcNetwork);
  get resolvers(): Set<ResolverModule>;
  get rpcNetwork(): RpcNetwork;
  resolve(
    domain: string,
    options?: ResolverOptions,
    bypassCache?: boolean
  ): Promise<DNSResult>;
  register(resolver: ResolverModule): void;
  clear(): void;
}
export interface ResolverModule {
  constructor(resolver: ResolverRegistry): any;
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  getSupportedTlds(): string[];
}
export declare abstract class AbstractResolverModule {
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
export {};
//# sourceMappingURL=resolverModule.d.ts.map
