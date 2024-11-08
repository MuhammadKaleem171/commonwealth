/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { GetCommunityResponseAddressesAddressesItemUserApiKey } from './GetCommunityResponseAddressesAddressesItemUserApiKey';
import { GetCommunityResponseAddressesAddressesItemUserEmailNotificationInterval } from './GetCommunityResponseAddressesAddressesItemUserEmailNotificationInterval';
import { GetCommunityResponseAddressesAddressesItemUserProfile } from './GetCommunityResponseAddressesAddressesItemUserProfile';
import { GetCommunityResponseAddressesAddressesItemUserProfileTagsItem } from './GetCommunityResponseAddressesAddressesItemUserProfileTagsItem';
export declare const GetCommunityResponseAddressesAddressesItemUser: core.serialization.ObjectSchema<
  serializers.GetCommunityResponseAddressesAddressesItemUser.Raw,
  CommonApi.GetCommunityResponseAddressesAddressesItemUser
>;
export declare namespace GetCommunityResponseAddressesAddressesItemUser {
  interface Raw {
    id?: number | null;
    email?: string | null;
    isAdmin?: boolean | null;
    disableRichText?: boolean | null;
    emailVerified?: boolean | null;
    selected_community_id?: string | null;
    emailNotificationInterval?: GetCommunityResponseAddressesAddressesItemUserEmailNotificationInterval.Raw | null;
    promotional_emails_enabled?: boolean | null;
    is_welcome_onboard_flow_complete?: boolean | null;
    profile: GetCommunityResponseAddressesAddressesItemUserProfile.Raw;
    xp_points?: number | null;
    ProfileTags?:
      | GetCommunityResponseAddressesAddressesItemUserProfileTagsItem.Raw[]
      | null;
    ApiKey?: GetCommunityResponseAddressesAddressesItemUserApiKey.Raw | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
