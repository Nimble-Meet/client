const path = require('path');

const includedDirs = [path.resolve(__dirname, 'src')];

module.exports = function withTwin(nextConfig) {
    return {
        ...nextConfig,
        webpack: (config, { isServer }) => {
            config.module.rules = config.module.rules.filter(
                (rule) =>
                    !(rule.test && rule.test.test && rule.test.test('.tsx'))
            );

            config.module.rules.push({
                test: /\.tsx?$/,
                include: includedDirs,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: path.resolve(__dirname, 'tsconfig.json')
                        }
                    }
                ]
            });

            if (isServer) {
                config.resolve.alias['@emotion/react'] = 'react';
            } else {
                config.resolve.alias['@emotion/react'] = '@emotion/react';
            }

            return config;
        }
    };
};
