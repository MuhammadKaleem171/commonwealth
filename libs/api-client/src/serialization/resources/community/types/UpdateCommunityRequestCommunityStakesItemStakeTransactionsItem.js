/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { UpdateCommunityRequestCommunityStakesItemStakeTransactionsItemStakeDirection } from './UpdateCommunityRequestCommunityStakesItemStakeTransactionsItemStakeDirection';

export const UpdateCommunityRequestCommunityStakesItemStakeTransactionsItem =
  core.serialization.object({
    transactionHash: core.serialization.property(
      'transaction_hash',
      core.serialization.string(),
    ),
    communityId: core.serialization.property(
      'community_id',
      core.serialization.string(),
    ),
    stakeId: core.serialization.property(
      'stake_id',
      core.serialization.number().optional(),
    ),
    address: core.serialization.string(),
    stakeAmount: core.serialization.property(
      'stake_amount',
      core.serialization.number(),
    ),
    stakePrice: core.serialization.property(
      'stake_price',
      core.serialization.string().optional(),
    ),
    stakeDirection: core.serialization.property(
      'stake_direction',
      UpdateCommunityRequestCommunityStakesItemStakeTransactionsItemStakeDirection,
    ),
    timestamp: core.serialization.number(),
  });
