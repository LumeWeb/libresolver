// @ts-nocheck
import type { DNSResult, ResolverOptions } from "./types.js";
import { getTld } from "./util.js";
import { ResolverRegistry } from "@lumeweb/resolver";

export interface ResolverModule {
  constructor(resolver: ResolverRegistry);

  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;

  getSupportedTlds(): string[];
}

// ts-ignore
export abstract class AbstractResolverModule implements ResolverModule {
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
