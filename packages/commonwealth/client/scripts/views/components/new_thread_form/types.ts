import type { ThreadKind, Topic } from 'models';

export type NewThreadFormType = {
  threadKind: ThreadKind;
  threadTitle: string;
  threadTopic: Topic;
  threadUrl?: string;
};

export enum NewThreadErrors {
  NoBody = 'Thread body cannot be blank',
  NoTopic = 'Thread must have a topic',
  NoTitle = 'Title cannot be blank',
  NoUrl = 'URL cannot be blank',
}

export enum NewDraftErrors {
  InsufficientData = 'Draft must have a text body.',
}
