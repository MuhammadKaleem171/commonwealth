/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateThreadReactionResponseAddressUserApiKey } from './CreateThreadReactionResponseAddressUserApiKey';
import { CreateThreadReactionResponseAddressUserEmailNotificationInterval } from './CreateThreadReactionResponseAddressUserEmailNotificationInterval';
import { CreateThreadReactionResponseAddressUserProfile } from './CreateThreadReactionResponseAddressUserProfile';
import { CreateThreadReactionResponseAddressUserProfileTagsItem } from './CreateThreadReactionResponseAddressUserProfileTagsItem';

export declare const CreateThreadReactionResponseAddressUser: core.serialization.ObjectSchema<
  serializers.CreateThreadReactionResponseAddressUser.Raw,
  CommonApi.CreateThreadReactionResponseAddressUser
>;
export declare namespace CreateThreadReactionResponseAddressUser {
  interface Raw {
    id?: number | null;
    email?: string | null;
    isAdmin?: boolean | null;
    disableRichText?: boolean | null;
    emailVerified?: boolean | null;
    selected_community_id?: string | null;
    emailNotificationInterval?: CreateThreadReactionResponseAddressUserEmailNotificationInterval.Raw | null;
    promotional_emails_enabled?: boolean | null;
    is_welcome_onboard_flow_complete?: boolean | null;
    profile: CreateThreadReactionResponseAddressUserProfile.Raw;
    xp_points?: number | null;
    ProfileTags?:
      | CreateThreadReactionResponseAddressUserProfileTagsItem.Raw[]
      | null;
    ApiKey?: CreateThreadReactionResponseAddressUserApiKey.Raw | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
