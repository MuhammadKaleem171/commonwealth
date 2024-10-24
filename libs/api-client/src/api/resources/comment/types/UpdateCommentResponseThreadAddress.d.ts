/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface UpdateCommentResponseThreadAddress {
  id?: number;
  address: string;
  communityId: string;
  userId?: number;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  verified?: Date;
  lastActive?: Date;
  ghostAddress?: boolean;
  walletId?: CommonApi.UpdateCommentResponseThreadAddressWalletId;
  blockInfo?: string;
  isUserDefault?: boolean;
  role?: CommonApi.UpdateCommentResponseThreadAddressRole;
  isBanned?: boolean;
  hex?: string;
  user?: CommonApi.UpdateCommentResponseThreadAddressUser;
  createdAt?: Date;
  updatedAt?: Date;
}
