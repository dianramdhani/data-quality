function config() {
    return {
        API: 'http://ems.tritronik.com:8443',
        STORAGEPREFIX: 'dq',
        whitelistedDomains: ['ems.tritronik.com:8443'],
        blacklistedRoutes: ['ems.tritronik.com:8443/login']
    };
}