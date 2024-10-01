/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export interface UpdateCommunityResponseAddressesItemUser {
    id?: number;
    email?: string;
    isAdmin?: boolean;
    disableRichText?: boolean;
    emailVerified?: boolean;
    selectedCommunityId?: string;
    emailNotificationInterval?: CommonApi.UpdateCommunityResponseAddressesItemUserEmailNotificationInterval;
    promotionalEmailsEnabled?: boolean;
    isWelcomeOnboardFlowComplete?: boolean;
    profile: CommonApi.UpdateCommunityResponseAddressesItemUserProfile;
    profileTags?: CommonApi.UpdateCommunityResponseAddressesItemUserProfileTagsItem[];
    createdAt?: Date;
    updatedAt?: Date;
}