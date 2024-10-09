/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';

export interface UpdateThreadResponseAddress {
  id?: number;
  address: string;
  communityId: string;
  userId?: number;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  verified?: Date;
  lastActive?: Date;
  ghostAddress?: boolean;
  walletId?: CommonApi.UpdateThreadResponseAddressWalletId;
  blockInfo?: string;
  isUserDefault?: boolean;
  role?: CommonApi.UpdateThreadResponseAddressRole;
  isBanned?: boolean;
  hex?: string;
  user?: CommonApi.UpdateThreadResponseAddressUser;
  createdAt?: Date;
  updatedAt?: Date;
}
