import { DNSRecord, DNSResult } from "./types.js";

export function getTld(domain: string): string {
  if (domain.includes(".")) {
    domain = domain.split(".")[domain.split(".").length - 1];
  }

  return domain;
}

export function getSld(domain: string): string {
  if (domain.includes(".")) {
    domain = domain
      .split(".")
      .slice(0, domain.split(".").length - 1)
      .join(".");
  }

  return domain;
}

export function isIp(ip: string) {
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );
}

export function isDomain(domain: string) {
  return /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/.test(
    domain
  );
}
export function resolverEmptyResponse(): DNSResult {
  return {
    records: [],
  };
}

export function resolverError(e: Error | string): DNSResult {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  return {
    records: [],
    error: e,
  };
}

export function resolveSuccess(records: DNSRecord[]): DNSResult {
  return {
    records,
  };
}
export function normalizeDomain(domain: string): string {
  return domain.replace(/^\.+|\.+$/g, "").replace(/^\/+|\/+$/g, "");
}
