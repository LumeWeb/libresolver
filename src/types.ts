export interface ResolverOptions {
  type: any;
  customType?: string;
  options?: any;
}

export interface DNSResult {
  records: any[];
  error?: Error;
}

export interface DNSRecord {
  type: string;
  customType?: string;
  value: string;
}

const DNS_RECORD_TYPE = {
  DEFAULT: "DEFAULT",
  A: "A",
  CNAME: "CNAME",
  NS: "NS",
  CONTENT: "CONTENT",
  TEXT: "TEXT",
  ALL: "ALL",
  CUSTOM: "CUSTOM",
};

Object.freeze(DNS_RECORD_TYPE);

export { DNS_RECORD_TYPE };
