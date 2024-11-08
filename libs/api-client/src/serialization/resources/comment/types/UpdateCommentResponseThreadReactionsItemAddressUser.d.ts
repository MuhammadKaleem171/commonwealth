/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateCommentResponseThreadReactionsItemAddressUserApiKey } from './UpdateCommentResponseThreadReactionsItemAddressUserApiKey';
import { UpdateCommentResponseThreadReactionsItemAddressUserEmailNotificationInterval } from './UpdateCommentResponseThreadReactionsItemAddressUserEmailNotificationInterval';
import { UpdateCommentResponseThreadReactionsItemAddressUserProfile } from './UpdateCommentResponseThreadReactionsItemAddressUserProfile';
import { UpdateCommentResponseThreadReactionsItemAddressUserProfileTagsItem } from './UpdateCommentResponseThreadReactionsItemAddressUserProfileTagsItem';
export declare const UpdateCommentResponseThreadReactionsItemAddressUser: core.serialization.ObjectSchema<
  serializers.UpdateCommentResponseThreadReactionsItemAddressUser.Raw,
  CommonApi.UpdateCommentResponseThreadReactionsItemAddressUser
>;
export declare namespace UpdateCommentResponseThreadReactionsItemAddressUser {
  interface Raw {
    id?: number | null;
    email?: string | null;
    isAdmin?: boolean | null;
    disableRichText?: boolean | null;
    emailVerified?: boolean | null;
    selected_community_id?: string | null;
    emailNotificationInterval?: UpdateCommentResponseThreadReactionsItemAddressUserEmailNotificationInterval.Raw | null;
    promotional_emails_enabled?: boolean | null;
    is_welcome_onboard_flow_complete?: boolean | null;
    profile: UpdateCommentResponseThreadReactionsItemAddressUserProfile.Raw;
    xp_points?: number | null;
    ProfileTags?:
      | UpdateCommentResponseThreadReactionsItemAddressUserProfileTagsItem.Raw[]
      | null;
    ApiKey?: UpdateCommentResponseThreadReactionsItemAddressUserApiKey.Raw | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
