verify:
	echo "Nothing to verify."

build-test:
	mkdir -p ./dist
	cp -v ./src/* ./dist/

build-prod:
	mkdir -p ./dist
	cp -v ./src/* ./dist/

test-e2e:
	echo "No E2E tests yet."

test-smoke:
	echo "No Smoke tests yet."
