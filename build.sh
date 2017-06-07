if [ ! -d build ]; then
  mkdir -p build;
fi
./node_modules/.bin/webpack --config webpack.config.js
cp source/index.html build/index.html