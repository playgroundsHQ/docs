---
sidebar_position: 4
title: Rate Limiting
description: Understanding platform rate limits and how to manage them.
---

# Rate Limiting

To ensure platform stability and fair resource usage, Playgrounds.dev implements comprehensive rate limiting powered by **Rack Attack**.

## Global Limits

The platform enforces default rate limits for all users:

| Scope | Limit | Period |
|-------|-------|--------|
| **Web UI** (by IP) | 5 000 requests | 1 hour |
| **API** (by player) | 5 000 requests | 1 hour |
| **API** (by API key) | 5 000 requests | 1 hour |
| **MCP** (by player) | 5 000 requests | 1 hour |

## Per-Player Overrides

If your project requires higher throughput, administrators can adjust limits for your account from the admin panel. These overrides apply to all requests associated with your player ID and take precedence over the global defaults.

## API Key Limits

Each API key can have its own specific rate limit, allowing you to isolate different integrations. When an API key is used, its specific limit takes precedence over the global player limit.

| Feature | Description |
|---------|-------------|
| **Hourly Windows** | All limits use a 1-hour sliding window for predictable, generous throughput. |
| **Redis Backed** | Rate limit state is persisted in a managed Redis cluster, ensuring accuracy across all web container replicas. |

## Response Headers

Every API and MCP response includes rate-limit headers so you can monitor your quota:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Maximum requests allowed in the current window. |
| `X-RateLimit-Remaining` | Requests remaining in the current window. |
| `X-RateLimit-Reset` | Seconds until the current window resets. |

## Handling Rate Limit Errors

When you exceed a limit, the platform returns a `429 Too Many Requests` status code. The response includes a `Retry-After` header indicating how many seconds to wait before retrying.

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Rate limit exceeded. Retry after 1234 seconds."
  }
}
```

:::tip
For programmatic integrations, always implement exponential backoff to handle rate limiting gracefully. Use the `X-RateLimit-Remaining` header to proactively slow down before hitting the limit.
:::
