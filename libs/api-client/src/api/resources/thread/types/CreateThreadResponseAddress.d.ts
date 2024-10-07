/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export interface CreateThreadResponseAddress {
    id?: number;
    address: string;
    communityId: string;
    userId?: number;
    verificationToken?: string;
    verificationTokenExpires?: Date;
    verified?: Date;
    lastActive?: Date;
    ghostAddress?: boolean;
    walletId?: CommonApi.CreateThreadResponseAddressWalletId;
    blockInfo?: string;
    isUserDefault?: boolean;
    role?: CommonApi.CreateThreadResponseAddressRole;
    isBanned?: boolean;
    hex?: string;
    user?: CommonApi.CreateThreadResponseAddressUser;
    createdAt?: Date;
    updatedAt?: Date;
}
