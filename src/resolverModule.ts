import type { DNSResult, ResolverOptions } from "./types.js";
import { getTld, isPromise } from "./util.js";

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
  get resolver(): ResolverRegistry;
  set resolver(value: ResolverRegistry);
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;

  getSupportedTlds(): string[];
  getSupportedTlds(): Promise<string[]>;
  getSupportedTlds(): any;
}

// ts-ignore
export abstract class AbstractResolverModule {
  constructor(resolver?: ResolverRegistry) {
    this._resolver = resolver;
  }

  private _resolver?: ResolverRegistry;

  get resolver(): ResolverRegistry {
    return this._resolver as ResolverRegistry;
  }

  set resolver(value: ResolverRegistry) {
    this._resolver = value;
  }

  abstract resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;

  getSupportedTlds(): string[];
  getSupportedTlds(): Promise<string[]>;
  getSupportedTlds(): any {
    return [];
  }

  isTldSupported(domain: string): Promise<boolean>;
  isTldSupported(domain: string): boolean;
  isTldSupported(domain: string): any {
    let supported = this.getSupportedTlds() as any;
    if (isPromise(supported)) {
      return (supported as Promise<string[]>).then((supported: string[]) => {
        return supported.includes(getTld(domain));
      });
    }

    return (supported as string[]).includes(getTld(domain));
  }
}
