export function getTld(domain) {
    if (domain.includes(".")) {
        domain = domain.split(".")[domain.split(".").length - 1];
    }
    return domain;
}
export function getSld(domain) {
    if (domain.includes(".")) {
        domain = domain
            .split(".")
            .slice(0, domain.split(".").length - 1)
            .join(".");
    }
    return domain;
}
export function isIp(ip) {
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
}
export function isDomain(domain) {
    return /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/.test(domain);
}
export function resolverEmptyResponse() {
    return {
        records: [],
    };
}
export function resolverError(e) {
    if (!(e instanceof Error)) {
        e = new Error(e);
    }
    return {
        records: [],
        error: e,
    };
}
export function resolveSuccess(records) {
    return {
        records,
    };
}
