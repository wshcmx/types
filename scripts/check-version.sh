localVersion=$(cat package.json | jq -r '.version')
masterVersion=$(git show origin/main:package.json | jq -r '.version')
[ "${localVersion}" = "`echo -e "${localVersion}\n${masterVersion}" | sort -V | head -n1`" ] && echo 'Package version should be upgraded' && exit 1 || exit 0