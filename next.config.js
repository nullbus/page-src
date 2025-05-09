
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    },
    output: "export",
};

module.exports = withBundleAnalyzer(config);
