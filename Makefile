install:
	/bin/bash ./scripts/install.sh

verify:
	/bin/bash ./scripts/verify.sh

build:
	/bin/bash ./scripts/build.sh

test-unit:
	/bin/bash ./scripts/test-unit.sh

test-e2e:
	/bin/bash ./scripts/test-e2e.sh

test-smoke:
	/bin/bash ./scripts/test-smoke.sh

start-api:
	/bin/bash ./scripts/start-api.sh
