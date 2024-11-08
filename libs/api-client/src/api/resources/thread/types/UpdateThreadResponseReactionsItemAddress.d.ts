/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface UpdateThreadResponseReactionsItemAddress {
  id?: number;
  address: string;
  communityId: string;
  userId?: number;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  verified?: Date;
  lastActive?: Date;
  ghostAddress?: boolean;
  walletId?: CommonApi.UpdateThreadResponseReactionsItemAddressWalletId;
  blockInfo?: string;
  isUserDefault?: boolean;
  role?: CommonApi.UpdateThreadResponseReactionsItemAddressRole;
  isBanned?: boolean;
  hex?: string;
  user?: CommonApi.UpdateThreadResponseReactionsItemAddressUser;
  createdAt?: Date;
  updatedAt?: Date;
}
