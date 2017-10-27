module.exports = {
    "plugins": ["node"],
    "extends": ["eslint:recommended", "plugin:node/recommended"],
    "rules": {
        "no-console": 0,
        "node/exports-style": ["error", "module.exports"],
    }
};
