install: install-deps
	npm ci

brain-games: run game
	node bin/brain-games.js

publish: publish project
	npm publish --dry-run