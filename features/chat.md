# Chat

The chat page is where you spend most of your time in ClawdSaber.

As long as an agent is selected in the sidebar and the Gateway is running, you can start a conversation immediately.

## Before You Start

### 1. Select an Agent

If the chat page shows "No available agent", you need to create one first.

Go to:

- [Templates](/features/templates-and-market) — create from a built-in or downloaded template
- [Agent Market](/features/templates-and-market) — browse and download community templates

### 2. Gateway Must Be Running

If the page shows a "Gateway not running" warning, chat will not work.

You can:

- Re-run the setup wizard to check the environment
- Click the Gateway restart button in the top bar
- See the [FAQ](/settings/faq) for troubleshooting

## Toolbar

The toolbar at the top of the chat page provides session management:

- **Current agent name** — shows which agent you are chatting with
- **Session dropdown** — switch between sessions or view session history
- **New Session** — start a fresh conversation without prior context
- **Delete Session** — remove the current session
- **Refresh** — reload the chat history
- **Show Thinking** — toggle visibility of the model's reasoning process

### Sessions

Each agent has its own list of sessions.

You can:

- Switch to a previous session to continue an older conversation
- Keep multiple sessions for different topics
- Delete sessions you no longer need

### New Session

If you do not want your new question to be influenced by prior context, click **New Session** to start clean.

### Show Thinking

When enabled, messages may display additional information:

- Thinking / reasoning fragments
- Tool calls and their results
- Intermediate processing steps

Not every response contains thinking content. If you enable it and see nothing extra, that simply means the model did not expose any reasoning for that particular reply.

## Input Area

The input area supports more than plain text.

You can:

- Type a message and press **Enter** to send
- Press **Shift + Enter** to insert a new line
- Click the paperclip icon to select files
- Drag files into the input area
- Paste images or files directly

### Attachments

- Images display a thumbnail preview before sending
- Other files show the filename, size, and a type icon
- Files are staged locally before being sent

If an attachment is still processing, the send button will be temporarily disabled. This is normal.

## Responses

ClawdSaber uses streaming output.

- Responses appear incrementally as they are generated
- You do not have to wait for the full reply to appear at once
- Click the **Stop** button to interrupt generation at any time

Messages support Markdown rendering, so code blocks, lists, tables, and other common formatting display correctly.

## Error Handling

If an error occurs during chat, an error bar appears at the bottom of the page.

To troubleshoot:

1. Read the error message.
2. Refresh the chat.
3. Confirm the agent has a model assigned.
4. Confirm your account has sufficient credits.
5. Confirm the Gateway is running.

If the agent never responds, start by checking the model in [Agent Configuration](/features/agent-config).
