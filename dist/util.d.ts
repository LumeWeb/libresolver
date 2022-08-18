import { DNSRecord, DNSResult } from "./types.js";
export declare function getTld(domain: string): string;
export declare function getSld(domain: string): string;
export declare function isIp(ip: string): boolean;
export declare function isDomain(domain: string): boolean;
export declare function resolverEmptyResponse(): DNSResult;
export declare function resolverError(e: Error | string): DNSResult;
export declare function resolveSuccess(records: DNSRecord[]): DNSResult;
//# sourceMappingURL=util.d.ts.map
