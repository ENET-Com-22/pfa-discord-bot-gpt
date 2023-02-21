test('env var DISCORD_TOKEN is defined', () => {
    expect(process.env.DISCORD_TOKEN).toBeDefined();
    expect(process.env.DISCORD_TOKEN).not.toBe('')
  });

test('env var OPENAI_ORG is defined', () => {
    expect(process.env.OPENAI_ORG).toBeDefined();
    expect(process.env.OPENAI_ORG).not.toBe('')
  });

test('env var OPENAI_KEY is defined', () => {
    expect(process.env.OPENAI_KEY).toBeDefined();
    expect(process.env.OPENAI_KEY).not.toBe('')
  });