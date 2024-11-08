/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface GetCommentsResponseResultsItem {
  id?: number;
  threadId: number;
  addressId: number;
  text: string;
  parentId?: string;
  contentUrl?: string;
  canvasSignedData?: string;
  canvasMsgId?: string;
  createdBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  markedAsSpamAt?: Date;
  discordMeta?: CommonApi.GetCommentsResponseResultsItemDiscordMeta;
  reactionCount: number;
  reactionWeightsSum?: number;
  search: CommonApi.GetCommentsResponseResultsItemSearch;
  address?: CommonApi.GetCommentsResponseResultsItemAddress;
  thread?: CommonApi.GetCommentsResponseResultsItemThread;
  reaction?: CommonApi.GetCommentsResponseResultsItemReaction;
  commentVersionHistories?: CommonApi.GetCommentsResponseResultsItemCommentVersionHistoriesItem[];
}
