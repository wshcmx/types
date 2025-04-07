localVersion=$(jq -r '.version' < package.json)
masterVersion=$(git show origin/main:package.json | jq -r '.version')

if [ "${localVersion}" = "$(echo -e "${localVersion}\n${masterVersion}" | sort -V | head -n1)" ]; then
    nextVersion=$(echo "${masterVersion}" | awk -F. '{printf "%d.%d.%d", $1, $2, $3+1}')

    if [ -z "${GITHUB_ACTIONS}" ]; then
        git remote update
        jq ".version = \"${nextVersion}\"" package.json > package.tmp
        mv package.tmp package.json
        npm install
        git add package*.json
    else
        echo "Package version should be upgraded. Current version: ${localVersion}, minimum required version: ${nextVersion}"
        exit 1
    fi
fi