import type { DNSResult, ResolverOptions } from "./types.js";
import { getTld } from "./util.js";
import { ResolverRegistry } from "@lumeweb/resolver";

export interface ResolverModule {
  constructor(resolver: ResolverRegistry): void;

  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
}

export abstract class AbstractResolverModule {
  protected resolver: ResolverRegistry;

  constructor(resolver: ResolverRegistry) {
    this.resolver = resolver;
  }

  abstract resolve(
    input: string,
    options: ResolverOptions,
    force: boolean
  ): Promise<DNSResult>;

  getSupportedTlds(): string[] {
    return [];
  }

  isTldSupported(domain: string): boolean {
    return this.getSupportedTlds().includes(getTld(domain));
  }
}
