export interface ResolverOptions {
  type: string;
  customType?: string;
  options?: any;
}
export interface DNSResult {
  records: DNSRecord[];
  error?: Error;
}
export interface DNSRecord {
  type: string;
  customType?: string;
  value: string;
}
declare const DNS_RECORD_TYPE: {
  A: string;
  CNAME: string;
  NS: string;
  CONTENT: string;
  TEXT: string;
  ALL: string;
  CUSTOM: string;
};
export { DNS_RECORD_TYPE };
//# sourceMappingURL=types.d.ts.map
