/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export interface UpdateCommentResponseThreadCollaboratorsItem {
    id?: number;
    address: string;
    communityId: string;
    userId?: number;
    verificationToken?: string;
    verificationTokenExpires?: Date;
    verified?: Date;
    lastActive?: Date;
    ghostAddress?: boolean;
    walletId?: CommonApi.UpdateCommentResponseThreadCollaboratorsItemWalletId;
    blockInfo?: string;
    isUserDefault?: boolean;
    role?: CommonApi.UpdateCommentResponseThreadCollaboratorsItemRole;
    isBanned?: boolean;
    hex?: string;
    user?: CommonApi.UpdateCommentResponseThreadCollaboratorsItemUser;
    createdAt?: Date;
    updatedAt?: Date;
}
