
/** @type {import('next').NextConfig} */
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    },
    output: "export",
};
