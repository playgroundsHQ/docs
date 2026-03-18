---
sidebar_position: 5
title: Mounted Files
description: Attach configuration files and secrets to your agents so they're available inside every container.
---

# Agent Mounted Files

**Mounted Files** let you attach files directly to an agent. These files are automatically injected into the agent container at a designated path every time the agent starts — in any Playground.

This is ideal for:
- Agent config files (e.g., `claude.md`, `.opencode.json`)
- Personal SSH keys or tokens needed by the agent
- Shared secrets or certificates

## Adding a Mounted File

You can add mounted files via the Agent detail card or the API.

### Via the UI

1. Open your Agent's detail card
2. Scroll to the **Mounted Files** section  
3. Click **Add File**
4. Upload the file and set the **mount path** (e.g., `/root/.config/my-agent/config.json`)

### Via the API

```bash
POST /api/agents/:id/mounted_files
Content-Type: multipart/form-data

file=@./claude.md&path=/root/.claude/CLAUDE.md
```

## Managing Files

- Files are encrypted at rest in Active Storage
- Edit the mount path or replace the file at any time
- Remove a file to stop mounting it without recreating the agent

## Limits

| Limit | Value |
|-------|-------|
| Max files per agent | 3 |
| Max file size | 2 MB |

## MCP Tool

Agents can manage their own mounted files via MCP:

```
add_agent_mounted_file  — Upload a new file to an agent
remove_agent_mounted_file — Remove a mounted file from an agent
```

This allows AI agents to self-configure their own environment by uploading config files programmatically.
