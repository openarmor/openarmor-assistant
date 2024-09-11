# `registerMessageParser` — Register your customized parser logic into Chatbot.

**Interaction** refers to a question-answer pair in Chatbot application. In most cases, an interaction consists of two messages: an `Input` message and an `Output` message. However, as the Chatbot evolves to become more powerful, it may display new messages such as visualizations, data explorers, or data grids. Therefore, it is crucial to implement a mechanism that allows other plugins to register their customized parser logic based on each interaction body.

![message parser](https://github.com/opensearch-project/dashboards-assistant/assets/13493605/b4ec1ff8-5339-4119-ad20-b2c31057bb0b)

## API

### registerMessageParser

```typescript
dashboardAssistant.registerMessageParser({
  id: 'foo_parser',
  parserProvider: async (interaction) => {
    if (interaction.input) {
      return [
        {
          type: 'input',
          contentType: 'text',
          content: interaction.input,
        },
      ];
    }
    return [];
  },
});
```
