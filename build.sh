
#!/bin/bash

npm run build || exit 1
rm -rf ./nginx/build || exit 1
cp -r ./dist ./nginx/build || exit 1