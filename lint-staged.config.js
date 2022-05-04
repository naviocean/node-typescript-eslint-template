module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint', 'git add -A .'],
    '*.json': ['prettier --write', 'git add -A .'],
};
