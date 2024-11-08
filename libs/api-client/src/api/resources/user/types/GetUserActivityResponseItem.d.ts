/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface GetUserActivityResponseItem {
  communityId: string;
  communityIcon?: string;
  id: number;
  userId: number;
  userAddress: string;
  profileName?: string;
  profileAvatar?: string;
  body: string;
  title: string;
  kind: string;
  stage: string;
  numberOfComments: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  lockedAt?: string;
  archivedAt?: string;
  markedAsSpamAt?: string;
  readOnly: boolean;
  hasPoll?: boolean;
  discordMeta?: CommonApi.GetUserActivityResponseItemDiscordMeta;
  topic: CommonApi.GetUserActivityResponseItemTopic;
  recentComments?: CommonApi.GetUserActivityResponseItemRecentCommentsItem[];
}
