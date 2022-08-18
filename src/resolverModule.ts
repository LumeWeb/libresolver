import type { DNSResult, ResolverOptions } from "./types.js";
import { getTld } from "./util.js";

export default interface ResolverModule {
  constructor(resolver: any): void;

  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
}

export abstract class AbstractResolverModule {
  protected resolver: any;

  constructor(resolver: any) {
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
