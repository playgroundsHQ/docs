---
sidebar_position: 2
title: Prop
description: A Prop is a connected Git repository (GitHub or Gitea) that provides source code for your environments.
---

# Prop

A **Prop** is a connected Git repository. It provides source code that gets mounted into your dynamic services, enabling live editing via your local editor or SSH.

## Overview

When you create a Prop, you link a Git repository to the platform. The system indexes branches, detects Docker Compose files, and makes the repository available for use in [Playspecs](/core-concepts/playspec).

fibe.gg supports two Git providers:

| Provider | Usage |
|----------|-------|
| **Gitea** (default) | Built-in Git hosting. New repositories are created here by default. |
| **GitHub** | Import existing repositories from your GitHub account. |

## Configuration

| Field | Description |
|-------|-------------|
| **Name** | A human-readable label for this Prop |
| **Repository URL** | The full URL of the repository |
| **Provider** | `gitea` (default) or `github` |
| **Default Branch** | The branch used by default when creating Playgrounds (e.g., `main`) |
| **Private** | Whether the repository is private |
| **Credentials** | Personal Access Token for private GitHub repositories |

## Gitea (Default Provider)

Every fibe.gg account comes with a built-in **Gitea** Git hosting instance. When you sign up:

- A Gitea account is automatically provisioned for you
- You can create new repositories directly from the fibe.gg UI
- Webhooks are auto-configured for push and pull request events
- All operations use your personal access token (managed automatically)

### Creating a Gitea Repository

1. Navigate to **Props** in the sidebar
2. Click **New Prop**
3. Enter a repository name and optional description
4. The repository is created on your Gitea instance and linked as a Prop

## GitHub (Import)

You can also import existing repositories from GitHub:

- **GitHub App** (recommended) — Install the fibe.gg GitHub App on your organization for automatic authentication, repository discovery, and webhook integration
- **Personal Access Token** — Provide a PAT for private repositories not accessible through the GitHub App

### GitHub→Gitea Mirroring

GitHub repositories can optionally be mirrored to your Gitea instance, giving you a local copy of the code on the platform.

## Branch Management

The platform automatically indexes all branches in your repository. Branches are:

- **Fetched on creation** — Initial branch list is populated when the Prop is created
- **Periodically synced** — The platform refreshes the branch index on a regular schedule
- **Searchable** — Use the branch typeahead when creating Playgrounds to find branches quickly

### Per-Branch Isolation

Each [Marquee](/core-concepts/marquee) checks out a specific branch of the repository. This means:

- **Same repository, different branches** — Multiple Marquees can use the same Prop but different branches
- **Same branch, different Marquees** — Each Marquee gets its own independent clone of the branch
- **Different Props** — A single Marquee can reference multiple Props if its Playspec defines services from different repositories

## Docker Compose Detection

When a Prop is created or synced, the platform automatically looks for `docker-compose.yml` or `docker-compose.yaml` in the repository root on the default branch. If found, this Compose file is stored on the Prop and can be used as a starting point when creating a [Playspec](/core-concepts/playspec).

## Code Hunks

Props support tracking individual code changes from git commits as **Hunks**:

- Each hunk represents a file change in a single commit (add, modify, delete, rename)
- Hunks can be ingested, listed, and processed via the [MCP tools](/mcp/overview) or API
- Useful for AI genies to review and process code changes incrementally

## Periodic Sync

The platform periodically syncs Props to:

- Refresh the branch index
- Update the stored Docker Compose file
- Detect new commits for [Production mode](/services/advanced#production-mode) builds

## Deletion Rules

A Prop cannot be deleted while it is referenced by any Playspec. You must first remove or update the referencing Playspecs before deleting the Prop.

## Resource Limits

| Limit | Value |
|-------|-------|
| Maximum Props per account | **1,000** |
