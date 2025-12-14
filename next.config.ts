import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
            },
            {
                hostname: 'localhost',
            },
        ],
    },

    // ignore build error
    typescript: {
        ignoreBuildErrors: true,
    }
    // webpack: (config) => {
    //     config.plugins.push(new VeliteWebpackPlugin());
    //     return config;
    // },
};

// class VeliteWebpackPlugin {
//     static started = false;
//     apply(/** @type {import('webpack').Compiler} */ compiler) {
//         compiler.hooks.beforeCompile.tapPromise(
//             'VeliteWebpackPlugin',
//             async () => {
//                 if (VeliteWebpackPlugin.started) return;
//                 VeliteWebpackPlugin.started = true;
//                 const dev = compiler.options.mode === 'development';
//                 await build({ watch: dev, clean: !dev });
//             }
//         );
//     }
// }

export default nextConfig;
