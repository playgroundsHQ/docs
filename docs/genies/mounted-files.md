---
sidebar_position: 5
title: Mounted Files
description: Attach configuration files and secrets to your genies so they're available inside every container.
---

# Genie Mounted Files

**Mounted Files** let you attach files directly to an genie. These files are automatically injected into the genie container at a designated path every time the genie starts — in any Playground.

This is ideal for:
- Genie config files (e.g., `claude.md`, `.opencode.json`)
- Personal SSH keys or tokens needed by the genie
- Shared secrets or certificates

## Adding a Mounted File

You can add mounted files via the Genie detail card or the API.

### Via the UI

1. Open your Genie's detail card
2. Scroll to the **Mounted Files** section  
3. Click **Add File**
4. Upload the file and set the **mount path** (e.g., `/root/.config/my-genie/config.json`)

### Via the API

```bash
POST /api/genies/:id/mounted_files
Content-Type: multipart/form-data

file=@./claude.md&path=/root/.claude/CLAUDE.md
```

## Managing Files

- Files are encrypted at rest in Active Storage
- Edit the mount path or replace the file at any time
- Remove a file to stop mounting it without recreating the genie

## Limits

| Limit | Value |
|-------|-------|
| Max files per genie | 3 |
| Max file size | 2 MB |

## MCP Tool

Genies can manage their own mounted files via MCP:

```
add_agent_mounted_file  — Upload a new file to an genie
remove_agent_mounted_file — Remove a mounted file from an genie
```

This allows AI genies to self-configure their own environment by uploading config files programmatically.
