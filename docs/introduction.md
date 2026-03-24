---
slug: /
sidebar_position: 1
title: Introduction
description: Welcome to fibe.gg — instant cloud development environments powered by Docker Compose.
---

# Welcome to fibe.gg

fibe.gg gives your team **instant, isolated full-stack cloud environments** powered by Docker Compose. Connect your GitHub repository, define your stack, and launch a live environment — complete with unique subdomains and automatic HTTPS — in seconds.

## How It Works

Every environment in fibe.gg is built from four core concepts:

```
Playroom → Playzone → Playspec → Playground
  (host)     (repo)    (blueprint)  (running env)
```

| Concept | What It Is |
|---------|-----------|
| [**Playroom**](/core-concepts/playroom) | A remote Docker host where your environments run |
| [**Playzone**](/core-concepts/playzone) | A connected GitHub repository that provides source code |
| [**Playspec**](/core-concepts/playspec) | A blueprint that defines your environment's services and configuration |
| [**Playground**](/core-concepts/playground) | A live, running instance of a Playspec on a Playroom |

## What You Can Do

- **Launch environments instantly** — Spin up complete stacks from a Docker Compose file or a template
- **SSH into live environments** — Connect directly to your running containers via Web SSH terminal
- **Share live previews** — Every service gets a unique HTTPS subdomain
- **Mix Dev and Production modes** — Mount source code for some services, use built images for others
- **Run headless tasks** — Use Job Mode to run ephemeral pipelines, test suites, or migrations
- **Automate with the API** — Full REST API with scoped API keys for CI/CD integration
- **Run automated AI repair jobs** — Use Playspec CI-Job and Muti-Job to automatically test and fix code with an AI Agent
- **Connect AI agents via MCP** — Use the built-in MCP server to allow any MCP-compatible AI agent to manage your environments
- **Integrate Custom Agents** — Store generic provider credentials and deploy AI agents alongside your services with Custom MCP support
- **Agent Features** — Leverage Agent Artefacts (file uploads), Mounted Files, and real-time Agent Activity tracking
- **Manage GitHub repos** — Create repositories and push files via the Repositories API
- **Control access** — Scoped API Keys and Webhook events for secure integrations
- **Track everything** — Audit Logs record every Playground lifecycle event for debugging and accountability
- **Publish reusable templates** — Share environment blueprints via Stargate or your own fleet

## Quick Links

| I want to... | Go to... |
|--------------|----------|
| Launch my first environment | [Launch](/launch) |
| Browse pre-built templates | [Stargate](/launch/stargate) |
| Understand core concepts | [Core Concepts](/core-concepts/playroom) |
| Run a headless task | [Job Mode](/core-concepts/job-mode) |
| Run automated AI repair jobs | [Automated Jobs](/core-concepts/automated-jobs) |
| Configure services | [Services](/services/overview) |
| Use the REST API | [API Reference](/api/overview) |
| Connect an AI agent via MCP | [MCP Server](/mcp/overview) |
| Use AI agents with my own credentials | [Agents](/agents/overview) |
| Attach files to an agent | [Agent Mounted Files](/agents/mounted-files) |
| Create a reusable template | [Templates](/launch/templates) |
| Manage API Keys and Webhooks | [Security & Access](/core-concepts/security) |
| View Playground event history | [Audit Logs](/core-concepts/audit-logs) |
