---
name: Clean-install security
description: Replit package security enforcement during automatic merge setup.
---

A working installed dependency tree does not establish that its versions can be cleanly reinstalled through Replit's package firewall.

**Why:** Automatic merge setup exposed a critical-vulnerability block on an existing framework version that had previously run successfully from installed dependencies.

**How to apply:** Keep merge setup installs fail-fast. If the firewall rejects a dependency, update to an allowed supported release, preferably within the same major version, using package-management tools and recheck the build and routes. Do not bypass the firewall or skip dependency installation to hide the failure.
