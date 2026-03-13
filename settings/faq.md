# FAQ

Common questions and troubleshooting tips, organized by topic.

## Login & Setup

### I did not receive the magic link email

- Check your spam or junk folder.
- Verify you entered the correct email address.
- Wait a minute and try again.

### The magic link does not open the app

Copy the full URL from the email and paste it into the input field on the login screen. See [Login & Registration](/getting-started/login) for details.

### The magic link expired

Magic links are valid for a limited time. Go back to the login screen and request a new one.

### The environment check is stuck

- Check your internet connection.
- Restart ClawdSaber and try the setup wizard again.
- If a specific component fails the check, follow the on-screen guidance to install or fix it.

## Chat & Agents

### The chat page says "No available agent"

You have not created an agent yet. Go to the [Template Library](/features/templates-and-market) or [Agent Market](/features/templates-and-market) and create one.

### The agent does not respond to messages

This is the most common issue. Check these four things in order:

1. **Model** — Open the agent's settings and confirm a model is assigned. An agent without a model cannot reply. See [Agent Configuration](/features/agent-config).
2. **Gateway** — Check the Gateway status indicator in the title bar. If it shows anything other than "Running", the agent cannot process messages.
3. **Credits** — Confirm your account has enough credits. If your balance is zero, top up on the [Recharge](/features/recharge) page.
4. **Network** — The Gateway needs an internet connection to reach the AI model provider.

### Can I send files in chat?

Yes. You can:

- Click the paperclip icon to select files
- Drag files into the input area
- Paste images directly

Images show a preview before sending. Other files display their name and size.

### What does "Show Thinking" do?

It toggles the visibility of the model's internal reasoning process. When enabled, you may see thinking fragments, tool calls, and intermediate steps in the response.

Not every response includes thinking content.

### My conversations are getting messy

Click **New Session** in the toolbar to start a fresh conversation. Each session maintains its own context independently.

## Telegram

### Telegram validation failed

- Confirm the Bot Token was copied from `@BotFather` without extra spaces.
- Make sure the bot was created successfully in Telegram.
- See [Telegram Integration](/features/telegram) for the full setup guide.

### I set allowed users but it does not work

- Use commas to separate usernames: `alice,bob,charlie`
- Do not include the `@` prefix.
- Verify the exact spelling of each username.

### The bot is connected but does not reply

Check in this order:

1. Agent has a model assigned.
2. Gateway is running.
3. Account has credits.

### How do I find my Telegram username?

Open Telegram, go to **Settings**, and look for your username (starts with `@`). When entering it in ClawdSaber, omit the `@`.

## Recharge

### What is the minimum recharge amount?

1 USDT.

### What network should I use?

Always use the network displayed on the payment screen. Do not send from a different network.

### I have a pending order — can I create a new one?

If a previous order is still pending, the app will try to resume it when you return to the Recharge page. If the order has expired, you can create a new one.

### My order expired

Expired orders cannot be reused. Create a new order from the Recharge page.

## Interface & Settings

### How do I change the language?

Go to **Settings > Appearance > Language** and click your preferred language. The change applies immediately.

### How do I check for updates?

Go to **Settings > Updates** and click **Check for Updates**. You can also enable auto-checking in the same section.

### What do the Gateway status colors mean?

| Status | Meaning |
|---|---|
| Running | Gateway is active and ready |
| Loading | Gateway is starting |
| Error | Something went wrong — try restarting |
| Stopped | Gateway is not running |

If the Gateway repeatedly fails to start, restart ClawdSaber. If the problem persists, check that the required runtime components are installed (re-run the setup wizard from Settings if needed).
