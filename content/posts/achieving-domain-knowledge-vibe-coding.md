---
title: "Achieving Domain Knowledge in the Era of Vibe Coding"
date: 2026-01-30T10:00:00+02:00
draft: false
tags: ["AI", "Vibe Coding", "LLM", "Domain Knowledge", "Documentation", "XML", "Kilo Code", "Cursor", "Trae"]
categories: ["Development", "AI"]
author: "Gilad"
description: "How to inject your company's soul into an LLM using structured domain knowledge and IDE rules."
---

Hey everyone! 👋

We're all "vibe coding" these days, right? You prompt, the AI generates, you iterate. It's fast, it's fun, and it gets you into that flow state where you feel like a wizard. 🧙‍♂️

But there's a catch.

While your AI copilot knows everything about React patterns and Python algorithms, it knows **zero** about your specific business. It doesn't know that your brand's primary color is "Warm Orange" (#FF8A33), not just "orange". It doesn't know you decided *against* using Redux three months ago in favor of React Context. It doesn't know your target persona is "Sarah the Solopreneur".

So you end up correcting it. Again. And again. "No, use the other API." "No, we don't do that here."

The vibe? **Ruined.** 📉

## The Missing Link: Domain Knowledge

I've been experimenting with a new approach to solve this: treating **Domain Knowledge as Code**.

Instead of hoping the AI guesses right, we explicitly feed it the "soul" of the project before it writes a single line of code. And we do it using a format that LLMs absolutely love: **XML**.

Why XML? Because LLMs thrive on structure. XML provides clear, semantic boundaries. When an AI reads `<brand-voice>Growth-oriented</brand-voice>`, it understands that constraint much better than a loose paragraph in a Markdown file.

### Step 1: The "Domain Knowledge" Repository

I recommend creating a dedicated, private repository (e.g., `your-org/domain-knowledge`) to house your company's "soft" assets. We structure ours with clear, distinct files:

*   `brand-design-system.xml` 🎨
*   `technical-architecture.xml` 🏗️
*   `customer-personas.xml` 👥
*   `business-overview.xml` 💼

Here is a **generic example** of what our `brand-design-system.xml` looks like. Notice how specific we get with the "psychology" of colors and the "personality" of the interface:

```xml
<brand-design-system version="2.0">
  <design-philosophy>
    <principle name="Conversation-First">
      <description>Every interface element supports natural flow.</description>
      <user-benefit>Feels like a chat, works like an app.</user-benefit>
    </principle>
    <principle name="Mobile-First Excellence">
      <description>Thumb-zone optimization is mandatory.</description>
    </principle>
  </design-philosophy>

  <color-psychology>
    <primary-palette>
      <brand-orange hex="#FF8A33" psychology="Energy, enthusiasm">
        <usage>Primary actions, growth indicators</usage>
        <contrast-ratio>4.8:1 on white</contrast-ratio>
      </brand-orange>
      <deep-navy hex="#0A1026" psychology="Trust, stability">
        <usage>Primary text, AI responses</usage>
      </deep-navy>
    </primary-palette>
  </color-psychology>

  <personality-attributes>
    <attribute name="Approachable">
      <voice-expression>Use "we" instead of "the system".</voice-expression>
      <visual-expression>Rounded corners, soft shadows.</visual-expression>
    </attribute>
  </personality-attributes>
</brand-design-system>
```

When the AI reads this, it doesn't just pick a color. It picks an *emotion*. It knows that error messages shouldn't just be red; they should be "supportive" rather than "alarming".

## Step 2: The Enforcer - A Vibe Coding IDE Rule

Having the docs is great, but how do you make sure the agent actually reads them every single time?

This is where a **vibe coding IDE rule** comes in.

Whether you're using Kilo Code, Cursor, Windsurf, Trae, or any other agentic editor, the pattern is the same: you configure a **project rule** that gets injected at the start of a new thread/task. The agent sees the rule before it sees your request.

Its job is simple but critical: **context injection**.

Instead of hoping the model remembers your constraints, the IDE forces a predictable boot sequence: *load domain knowledge → then code*.

### The "Primary Directive"

At the top of the rule, we put one non-negotiable line: the agent must load the domain knowledge first. This isn't a suggestion; it's a protocol.

Here is a generic example of the kind of rule that gets injected:

```markdown
# Project Protocol: Domain Knowledge Access

## Primary Directive
**ALWAYS** access the `domain-knowledge` repository using the GitHub MCP server before working on any task.

## The Loop
1. **Analyze Request**: What is the user asking for? (UI? Backend? Business Logic?)
2. **Fetch Knowledge**: Read the relevant XML files from the knowledge repo.
3. **Apply Context**: Align the code with the design system and architecture.
4. **Execute**: Write the code.

## Knowledge Mapping
- **UI/Design Tasks** → Read `brand-design-system.xml`
- **Backend/API Tasks** → Read `technical-architecture.xml`
- **Copy/Marketing** → Read `company-overview.xml` & `customer-personas.xml`

## Example Workflow
If the user asks: "Create a login screen."

You MUST:
1. Call `github:get_file_contents(path="brand-design-system.xml")`
   -> *Result: "Oh, I need to use Deep Navy background and Warm Orange buttons."*
2. Call `github:get_file_contents(path="technical-architecture.xml")`
   -> *Result: "Oh, we use Cloudflare Workers for auth, not Firebase."*
3. Generate the code matching these constraints.

## Failure to comply results in "Generic Code" which is strictly prohibited.
```

## The Result?

The difference is night and day.

Before adding an IDE rule, asking for a "landing page hero section" would get me a standard Bootstrap-looking block with "Lorem Ipsum".

**With Domain Knowledge + an IDE Rule:**

1.  The IDE intercepts the session start and enforces the rule: *"Read the XMLs."*
2.  The AI checks `brand-design-system.xml` and suggests a "Sunrise Gradient" background because it knows that represents "Growth".
3.  It checks `company-overview.xml` and writes copy targeting "Sarah the Solopreneur", addressing her pain points about "time management".
4.  It checks `technical-architecture.xml` and scaffolds the component using `React` + `Tailwind` + `Vite`, because that's our standard stack.

It feels less like a tool and more like a **senior partner** who has been with the company for years.

## How to Do It Yourself

1.  **Centralize:** Create a private repo for your "soft" assets and structure them with XML.
2.  **Create an IDE rule:** Add a project rule file that runs on new threads/tasks.
3.  **Configure:** Set a Primary Directive that forces loading the knowledge base first.
4.  **Vibe:** Start coding. The agent will now "know" your company from the very first prompt.

Vibe coding is great. But **Vibe Coding + Domain Knowledge**? That's how you build products that actually feel like *yours*.

Happy coding! 🚀
