clean:
	/bin/bash ./scripts/clean.sh

install-dev:
	/bin/bash ./scripts/install-dev.sh

install-prod:
	/bin/bash ./scripts/install-prod.sh

install:
	make install-dev

verify:
	/bin/bash ./scripts/verify.sh

build:
	/bin/bash ./scripts/build.sh

build-sam:
	/bin/bash ./scripts/build-sam.sh

test-unit:
	/bin/bash ./scripts/test-unit.sh

test-e2e:
	/bin/bash ./scripts/test-e2e.sh

test-smoke:
	/bin/bash ./scripts/test-smoke.sh

start-api:
	/bin/bash ./scripts/start-api.sh
