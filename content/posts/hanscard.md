---
title: "HansCard: A Modern Approach to Language Learning"
date: 2024-03-21
author: "EvilUrge"
description: "Introducing HansCard: An innovative language learning application combining spaced repetition with real-world sentences"
tags: ["language learning", "React", "TypeScript", "Supabase", "open source"]
categories: ["Projects"]
---

![HansCard Banner](/img/hanscard.png)

## Overview
[HansCard](https://card.evilurge.com) is an innovative language learning application that combines spaced repetition with real-world sentences to help users learn languages naturally and effectively. The app focuses on vocabulary acquisition through context, using authentic sentences from native speakers via the [Tatoeba](https://tatoeba.org/) project.

## Current Functionality

{{< figure src="/images/hanscard-dashboard.png" title="HansCard Dashboard" >}}

- **Vocabulary Management**: Users can add words they want to learn in their target language
- **Authentic Sentences**: Integration with [Tatoeba API](https://tatoeba.org/en/downloads) to fetch real-world example sentences
- **Spaced Repetition**: Smart review system that adapts to user's learning pace
- **Multi-language Support**: Currently supporting English, Hebrew, and Dutch
- **Dark/Light Mode**: Comfortable reading experience in any lighting condition
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Upcoming Features

- **Social Learning**: Friend system for collaborative learning and motivation
- **Progress Analytics**: Detailed insights into learning patterns and progress
- **Custom Sentence Creation**: Ability to create and share your own example sentences
- **Audio Support**: Text-to-speech for proper pronunciation practice
- **Gamification**: Achievement system and daily streaks to maintain motivation

## Technical Stack

Our tech stack is built on modern, reliable technologies:

- **Frontend**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/), leveraging [Vite](https://vitejs.dev/) for blazing-fast development
- **UI Framework**: [Chakra UI](https://chakra-ui.com/) for beautiful, accessible components
- **Backend**: [Supabase](https://supabase.com/) for authentication, database, and serverless functions
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) for efficient data fetching and caching
- **Development Tools**: [Cursor AI](https://cursor.sh/) for enhanced development workflow

## Development Challenges and Solutions

### Database Schema Evolution
Managing database schema changes while maintaining data integrity was one of our key challenges. We implemented robust migration scripts that ensure backward compatibility while allowing for new features.

```sql
-- Example of our migration approach
ALTER TABLE sentences
ADD COLUMN IF NOT EXISTS translation_lang VARCHAR(3) DEFAULT 'eng';
```

### React Hook Management
Complex state management led to some interesting challenges with React hooks. We solved this by implementing a consistent hook pattern across components:

```typescript
const Dashboard = () => {
  // Auth hooks
  const { user } = useAuth();

  // UI hooks
  const toast = useToast();
  const { colorMode } = useColorMode();

  // State hooks
  const [words, setWords] = useState<Word[]>([]);

  // Query hooks
  const { data, isLoading } = useQuery(...);

  // Effect hooks
  useEffect(() => {
    // Component logic
  }, [dependencies]);
};
```

### API Rate Limiting
To handle Tatoeba API limits effectively, we implemented a caching system using Supabase:

```typescript
async function fetchAndCacheSentences(word: string, lang: string) {
  // Check cache first
  const { data: cached } = await supabase
    .from('sentences_cache')
    .select()
    .eq('word', word)
    .eq('lang', lang);

  if (cached?.length > 0) {
    return cached;
  }

  // Fetch from Tatoeba if not cached
  const sentences = await fetchFromTatoeba(word, lang);

  // Cache the results
  await supabase
    .from('sentences_cache')
    .insert(sentences.map(s => ({
      word,
      lang,
      sentence: s
    })));

  return sentences;
}
```

## The Cursor AI Experience

Developing with [Cursor AI](https://cursor.sh/) has been a game-changer. The AI assistant helped with:
- Quick problem diagnosis and solution proposals
- Code refactoring suggestions
- Best practice implementations
- Real-time code review and optimization

## Future Development Ideas

### Language Exchange
- Built-in chat system for language partners
- Video call integration for conversation practice

### AI-Powered Features
- Smart sentence difficulty assessment
- Personalized learning paths
- Grammar pattern recognition

### Extended Learning Tools
- Flashcard export to popular SRS systems
- Integration with dictionary APIs
- Custom vocabulary lists by topic

### Community Features
- User-created content sharing
- Learning groups and challenges
- Native speaker verification system

## Get Involved

Want to contribute to HansCard? Check out our [GitHub repository](https://github.com/EvilUrge/HansCard) or try the app at [card.evilurge.com](https://card.evilurge.com).

---

*Note: This project is open source and welcomes contributions from the community. Whether you're a language learner, developer, or educator, your input can help shape the future of this language learning tool.*

[^1]: Tatoeba is a collection of sentences and translations that is freely available under CC-BY 2.0.