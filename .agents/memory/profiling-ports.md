---
name: Temporary profiling ports
description: Replit configuration side effect of running short-lived test servers on extra ports.
---

Temporary test servers on additional ports can create persistent port mappings in Replit's workspace configuration, even after the test process stops.

**Why:** A short-lived production-mode performance harness added an unrelated port mapping that persisted after the background task was stopped.

**How to apply:** After profiling on an additional port, verify the process is gone and the workspace's configured ports match the starting state. Remove an unintended mapping using the platform's validated configuration replacement rather than a direct edit.
