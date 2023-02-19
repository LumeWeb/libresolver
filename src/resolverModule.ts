import type { DNSResult, ResolverOptions } from "./types.js";
import { getTld } from "./util.js";
import type { RpcNetwork } from "@lumeweb/rpc-client";

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

export interface ResolverModuleConstructor {
  new (resolver: ResolverRegistry);
}

export interface ResolverModule extends ResolverModuleConstructor {
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;

  getSupportedTlds(): string[];
}

// ts-ignore
export abstract class AbstractResolverModule {
  protected resolver: ResolverRegistry;

  constructor(resolver: ResolverRegistry) {
    this.resolver = resolver;
  }

  abstract resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;

  getSupportedTlds(): string[] {
    return [];
  }

  isTldSupported(domain: string): boolean {
    return this.getSupportedTlds().includes(getTld(domain));
  }
}
