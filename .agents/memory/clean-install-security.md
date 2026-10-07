---
name: Clean-install security
description: Replit package security enforcement during automatic merge setup.
---

A working installed dependency tree does not establish that its versions can be cleanly reinstalled through Replit's package firewall.

**Why:** Automatic merge setup exposed a critical-vulnerability block on an existing framework version that had previously run successfully from installed dependencies.

**How to apply:** Keep merge setup installs fail-fast. If the firewall rejects a dependency, update to an allowed supported release, preferably within the same major version, using package-management tools and recheck the build and routes. Do not bypass the firewall or skip dependency installation to hide the failure.

Dependency lockfiles shared with external build services must use publicly reachable package download URLs, not Replit-internal registry addresses.

**Why:** Dependency updates in Replit can record internal package-firewall URLs in the lockfile. Vercel cannot resolve that internal host and fails before the application build starts.

**How to apply:** After dependency updates, check lockfile download URLs for portability. Normalize internal npm URL prefixes to the public npm registry while preserving versions and integrity hashes, then verify tarball availability and a clean install/build. Keep Replit's package security enforcement intact.
