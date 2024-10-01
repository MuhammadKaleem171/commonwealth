/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export interface CreateGroupResponseAddressesItemUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selectedCommunityId?: string;
    emailNotificationInterval?: CommonApi.CreateGroupResponseAddressesItemUserEmailNotificationInterval;
    promotionalEmailsEnabled?: boolean;
    isWelcomeOnboardFlowComplete?: boolean;
    profile: CommonApi.CreateGroupResponseAddressesItemUserProfile;
    profileTags?: CommonApi.CreateGroupResponseAddressesItemUserProfileTagsItem[];
    createdAt?: Date;
    updatedAt?: Date;
}