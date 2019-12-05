install:
	npm install
start:
	npx babel-node src/bin/brain-game.js
publish:
	npm publish --dry-run
build:
	rm -rf dist
	npm run build
lint:
	npx eslint src/