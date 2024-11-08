/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface UpdateCommunityResponseContestManagersItemTopicsItem {
  id?: number;
  name?: string;
  communityId: string;
  description?: string;
  telegram?: string;
  featuredInSidebar?: boolean;
  featuredInNewPost?: boolean;
  defaultOffchainTemplate?: string;
  order?: number;
  channelId?: string;
  groupIds?: number[];
  defaultOffchainTemplateBackup?: string;
  weightedVoting?: CommonApi.UpdateCommunityResponseContestManagersItemTopicsItemWeightedVoting;
  /** token chain node ID, used for ERC20 topics */
  chainNodeId?: number;
  /** token address, used for ERC20 topics */
  tokenAddress?: string;
  /** token symbol, used for ERC20 topics */
  tokenSymbol?: string;
  /** vote weight multiplier, used for ERC20 topics */
  voteWeightMultiplier?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  contestTopics?: CommonApi.UpdateCommunityResponseContestManagersItemTopicsItemContestTopicsItem[];
}
