# Agent Configuration

The Agent Detail page is the central configuration hub for each agent.

To open it, hover over an agent in the sidebar and click the **Settings** icon.

## Overview Panel

At the top of the page, a summary panel shows the agent's key stats:

- Current model
- Channel connection status
- Number of sessions
- Number of DM sessions
- Message count
- Token usage
- Last active time
- Average response time

Use this panel to quickly assess whether the agent is operational.

## Model

The Model tab controls which AI model powers the agent's responses.

### What You See

- Whether a model is currently assigned
- Which model is in use
- A button to pick or change the model

### How to Configure

1. Go to the **Model** tab.
2. Click **Pick Platform Model** (or **Change Model** if one is already set).
3. In the dialog, select a model from the available list.
4. Wait for the configuration to save.

The model picker dialog shows:

- Model name and provider
- Input price
- Output price
- Credit cost
- A brief description

### When to Check This First

If the agent was created successfully but does not respond to messages, this is the first place to look. An agent without a model cannot generate replies.

## Skills

The Skills tab has two sections:

### Agent Skills

Skills that are installed specifically on this agent.

You can:

- View installed skills
- Open a skill's detail dialog (description, configuration, README)
- Uninstall skills you no longer need
- Search the marketplace and install new skills

### Built-in Skills

Global skills that ship with the application.

You can:

- View each skill's description
- Enable or disable individual built-in skills

If you are unsure whether to enable a skill, keep the defaults and add skills as needed.

## Channels

The Channels tab connects the agent to external messaging platforms.

### What You Can Do

- View connected channels and their status
- Add a new channel
- Remove an existing channel

### Telegram Setup

Click **Add Channel**, then select Telegram. You need to fill in:

- **Bot Token** — obtained from Telegram's `@BotFather`
- **Allowed Users** — a comma-separated list of Telegram usernames (without the `@` prefix)

To allow all users, enter `*`.

After saving, the app validates the token automatically. On success, the bot's username appears and the channel is added to the list.

For a detailed walkthrough, see [Telegram Integration](/features/telegram).

## SOUL

The SOUL tab defines the agent's personality and long-term behavior.

Think of it as the system prompt that shapes how the agent responds across all conversations.

### What You Can Do

- Edit the SOUL content directly in the text editor
- Choose a preset template from the template selector
- Save your changes

### Tips

- If you are not sure what to write, start with a preset template and modify it.
- Applying a template replaces the current content, so back up anything you want to keep first.

## Environment Variables (.env)

The .env tab lets you add runtime variables specific to this agent.

Use cases include:

- Extra configuration for specific channels or services
- Variables that certain skills need to read
- Settings you want to keep separate from other agents

### Notes

- This is a plain text editor — one `KEY=VALUE` per line
- Remember to click **Save** after making changes
- If you are not sure whether a variable will affect behavior, test on a low-risk agent first

## Deleting an Agent

You can delete an agent from the overview panel at the top of the Agent Detail page.

Click the **Delete** button and confirm in the dialog.

This action is irreversible. Before deleting, consider whether you still need the agent's SOUL content, `.env` settings, or channel configurations.

## Recommended Configuration Order

If you just want to get an agent running as quickly as possible:

1. Assign a model.
2. Send a test message.
3. Add skills when you need extended capabilities.
4. Add a Telegram channel when you want external access.
5. Refine the SOUL and `.env` over time.
