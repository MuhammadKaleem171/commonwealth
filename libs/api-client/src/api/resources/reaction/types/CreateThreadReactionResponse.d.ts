/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface CreateThreadReactionResponse {
  id?: number;
  addressId: number;
  reaction: 'like';
  threadId?: number;
  commentId?: number;
  proposalId?: number;
  calculatedVotingWeight?: number;
  canvasSignedData?: unknown;
  canvasMsgId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  address?: CommonApi.CreateThreadReactionResponseAddress;
  communityId: string;
}
