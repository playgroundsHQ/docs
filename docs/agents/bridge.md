---
sidebar_position: 2
title: Bridge
description: The central hub for all your AI agents and chat sessions.
---

# Bridge

The **Bridge** is the central management hub for all your AI agents. It provides a unified, full-screen interface where you can quickly switch between active agent chats, monitor their status, and manage their lifecycle across all your [Playrooms](/core-concepts/playroom).

## Key Features

### 1. Unified Agent Sidebar
The left sidebar lists all your registered agents. You can see their current status at a glance:
- **Authenticated:** Ready for chat or attachment to Playgrounds.
- **Pending:** Requires credential setup.
- **Active Chat:** Indicates an agent currently running a standalone chat session.

### 2. Instant Tab Switching
The Bridge uses a high-performance client-side switching mechanism. When you click on an agent, the interface updates instantly without a full page reload or iframe flicker, allowing you to jump between different AI assistants seamlessly.

### 3. Real-time Status & Reachability
The Bridge continuously monitors the health of your agent containers.
- **SSL Verification:** If a chat is deploying, the Bridge checks if the SSL certificate is ready before letting you in.
- **Automatic Retries:** If a connection is temporarily lost, the Bridge attempts to reconnect and updates the UI status in real-time.

### 4. Direct Terminal & Logs
Access advanced developer tools directly from the Bridge:
- **View Logs:** Stream live container logs to debug agent behavior or provider connection issues.
- **Debug Terminal:** Open a web-based shell into the agent sidecar for deep inspection.

## Standalone Chat Lifecycle

Through the Bridge, you can launch agents on any active Playroom without creating a full Playground.

1. **Launch:** Pick an agent and a destination Playroom.
2. **Interact:** Chat with the agent via its own unique subdomain.
3. **Extend:** Standalone chats have a default TTL (typically 2 hours). You can extend this or set it to **Never Expire**.
4. **Purge:** Use the "Purge" action to completely wipe the agent's remote environment and start fresh.

## Agent Mutters (Internal Reasoning)

Modern AI agents often perform complex reasoning before producing a response. The Bridge exposes these "Mutters" (internal thoughts) in a dedicated panel, giving you transparency into the agent's decision-making process.

- **Traceable logic:** See exactly how the agent is approaching your task.
- **Debugging:** Identify where an agent might be getting stuck or misinterpreting instructions.
