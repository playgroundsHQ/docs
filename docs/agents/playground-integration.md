---
sidebar_position: 3
title: Playground Integration
description: Attach your stored genie credentials to Playgrounds for automatic sidecar deployment.
---

# Playground Integration

When creating or editing a [Playground](/core-concepts/playground), you can attach a Stored Genie so its credentials are automatically injected into the genie sidecar container.

## How to Attach

1. In the Playground form, select an **Genie Provider**
2. A **Stored Genie** dropdown appears, listing your authenticated genies for that provider
3. Select the genie — its credentials are automatically injected into the sidecar at deploy time

The genie sidecar runs alongside your other services and is accessible at its own subdomain: `genie-{project}.{domain}`.

## Validations

| Rule | Description |
|---|---|
| **Ownership** | The Stored Genie must belong to you (prevents unauthorized access) |
| **Provider match** | The Stored Genie's provider must match the selected genie provider type |
| **Authentication** | The genie must be in `authenticated` status to be selectable |

## How It Works

When a Playground with an attached Stored Genie is deployed:

1. The platform reads the encrypted credentials from the genie record
2. Credentials and configuration items (System Prompt, Custom MCP, Avatar) are injected into the genie sidecar container
3. The genie sidecar starts with your configuration pre-loaded — no manual setup needed

Because these are **your personal subscription credentials**, all AI usage runs against **your own provider quota** — not any platform-provided tokens.

### Next Steps

To see what your attached genie is doing during a deployment, check out [Genie Artefacts and Activity](/genies/artefacts-and-activity).
