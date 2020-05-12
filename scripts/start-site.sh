yarn

if [ $NODE_ENV == "development" ]; then
    yarn develop-site
else
    yarn build-site
fi