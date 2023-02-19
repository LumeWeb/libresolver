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

export interface ResolverModuleConstructor {
  new (resolver: ResolverRegistry);
}

export interface ResolverModule extends ResolverModuleConstructor {
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;

  getSupportedTlds(): string[] | Promise<string[]>;
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

  getSupportedTlds(): string[] | Promise<string[]> {
    return [];
  }

  isTldSupported(domain: string): Promise<boolean>;
  isTldSupported(domain: string): boolean;
  isTldSupported(domain: string): any {
    let supported = this.getSupportedTlds();
    if (isPromise(supported as Promise<string[]>)) {
      return (supported as Promise<string[]>).then((supported: string[]) => {
        return supported.includes(getTld(domain));
      });
    }

    return (supported as string[]).includes(getTld(domain));
  }
}
