/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { UpdateThreadResponseReactionsItemAddressRole } from './UpdateThreadResponseReactionsItemAddressRole';
import { UpdateThreadResponseReactionsItemAddressUser } from './UpdateThreadResponseReactionsItemAddressUser';
import { UpdateThreadResponseReactionsItemAddressWalletId } from './UpdateThreadResponseReactionsItemAddressWalletId';
export const UpdateThreadResponseReactionsItemAddress =
  core.serialization.object({
    id: core.serialization.number().optional(),
    address: core.serialization.string(),
    communityId: core.serialization.property(
      'community_id',
      core.serialization.string(),
    ),
    userId: core.serialization.property(
      'user_id',
      core.serialization.number().optional(),
    ),
    verificationToken: core.serialization.property(
      'verification_token',
      core.serialization.string().optional(),
    ),
    verificationTokenExpires: core.serialization.property(
      'verification_token_expires',
      core.serialization.date().optional(),
    ),
    verified: core.serialization.date().optional(),
    lastActive: core.serialization.property(
      'last_active',
      core.serialization.date().optional(),
    ),
    ghostAddress: core.serialization.property(
      'ghost_address',
      core.serialization.boolean().optional(),
    ),
    walletId: core.serialization.property(
      'wallet_id',
      UpdateThreadResponseReactionsItemAddressWalletId.optional(),
    ),
    blockInfo: core.serialization.property(
      'block_info',
      core.serialization.string().optional(),
    ),
    isUserDefault: core.serialization.property(
      'is_user_default',
      core.serialization.boolean().optional(),
    ),
    role: UpdateThreadResponseReactionsItemAddressRole.optional(),
    isBanned: core.serialization.property(
      'is_banned',
      core.serialization.boolean().optional(),
    ),
    hex: core.serialization.string().optional(),
    user: core.serialization.property(
      'User',
      UpdateThreadResponseReactionsItemAddressUser.optional(),
    ),
    createdAt: core.serialization.property(
      'created_at',
      core.serialization.date().optional(),
    ),
    updatedAt: core.serialization.property(
      'updated_at',
      core.serialization.date().optional(),
    ),
  });
