# Telegram Integration

If you want people to chat with your agent directly on Telegram, you need to connect a Telegram channel.

## Prerequisites

Before configuring, you need a Telegram Bot Token.

### How to Get a Bot Token

1. Open Telegram and search for `@BotFather`.
2. Send `/newbot`.
3. Follow the prompts to set a bot name and username.
4. Copy the Bot Token that BotFather returns.

A Bot Token looks like this:

```text
123456789:ABCdefGHIjklMNOpqrsTUVwxyz
```

Keep this token private. Do not share it publicly.

## Connecting in ClawdSaber

1. In the sidebar, find the agent you want to connect.
2. Click the **Settings** icon on that agent.
3. Go to the **Channels** tab.
4. Click **Add Channel**.
5. Select **Telegram**.
6. Fill in the form:

| Field | Description |
|---|---|
| **Bot Token** | The token from `@BotFather` |
| **Allowed Users** | Comma-separated Telegram usernames (no `@` prefix) |

## Allowed Users Format

### Allow Everyone

Enter:

```text
*
```

### Allow Specific Users

Enter Telegram usernames separated by commas, without the `@` symbol:

```text
alice,bob,charlie
```

## What Happens After Saving

When you save, the app validates the Bot Token.

On success:

- A confirmation message appears
- The bot's username is displayed
- The channel appears in the channel list

On failure, the error message is shown directly on the form.

## Testing the Connection

1. Open Telegram and search for your bot.
2. Click **Start** or send any message.
3. Check whether the agent responds.

If you restricted allowed users, make sure your Telegram username is in the list.

## Common Issues

### Bot Token is invalid

- Confirm the token was copied from `@BotFather`.
- Check for extra spaces or line breaks.
- Verify that the bot was created successfully in Telegram.

### Allowed users setting does not work

- Make sure usernames are separated by commas (not spaces or semicolons).
- Do not include the `@` prefix.
- Verify that the Telegram username you are testing with matches exactly.

### Bot is connected but does not reply

Check the following in order:

1. The agent has a model assigned (see [Agent Configuration](/features/agent-config)).
2. The Gateway is running.
3. Your account has sufficient credits.

If none of that helps, see the [FAQ](/settings/faq).
