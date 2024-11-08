/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { GetCommunitiesResponseResultsItemAddressesItemUserApiKey } from './GetCommunitiesResponseResultsItemAddressesItemUserApiKey';
import { GetCommunitiesResponseResultsItemAddressesItemUserEmailNotificationInterval } from './GetCommunitiesResponseResultsItemAddressesItemUserEmailNotificationInterval';
import { GetCommunitiesResponseResultsItemAddressesItemUserProfile } from './GetCommunitiesResponseResultsItemAddressesItemUserProfile';
import { GetCommunitiesResponseResultsItemAddressesItemUserProfileTagsItem } from './GetCommunitiesResponseResultsItemAddressesItemUserProfileTagsItem';
export declare const GetCommunitiesResponseResultsItemAddressesItemUser: core.serialization.ObjectSchema<
  serializers.GetCommunitiesResponseResultsItemAddressesItemUser.Raw,
  CommonApi.GetCommunitiesResponseResultsItemAddressesItemUser
>;
export declare namespace GetCommunitiesResponseResultsItemAddressesItemUser {
  interface Raw {
    id?: number | null;
    email?: string | null;
    isAdmin?: boolean | null;
    disableRichText?: boolean | null;
    emailVerified?: boolean | null;
    selected_community_id?: string | null;
    emailNotificationInterval?: GetCommunitiesResponseResultsItemAddressesItemUserEmailNotificationInterval.Raw | null;
    promotional_emails_enabled?: boolean | null;
    is_welcome_onboard_flow_complete?: boolean | null;
    profile: GetCommunitiesResponseResultsItemAddressesItemUserProfile.Raw;
    xp_points?: number | null;
    ProfileTags?:
      | GetCommunitiesResponseResultsItemAddressesItemUserProfileTagsItem.Raw[]
      | null;
    ApiKey?: GetCommunitiesResponseResultsItemAddressesItemUserApiKey.Raw | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
