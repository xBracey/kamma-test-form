yarn

if [ $NODE_ENV == "development" ]; then
    yarn develop-api
else
    yarn build-api
fi