yarn

if [ $NODE_ENV == "development" ]; then
    yarn develop
else
    yarn build
fi