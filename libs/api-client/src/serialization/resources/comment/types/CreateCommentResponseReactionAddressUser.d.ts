/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommentResponseReactionAddressUserEmailNotificationInterval } from "./CreateCommentResponseReactionAddressUserEmailNotificationInterval";
import { CreateCommentResponseReactionAddressUserProfile } from "./CreateCommentResponseReactionAddressUserProfile";
import { CreateCommentResponseReactionAddressUserProfileTagsItem } from "./CreateCommentResponseReactionAddressUserProfileTagsItem";
export declare const CreateCommentResponseReactionAddressUser: core.serialization.ObjectSchema<serializers.CreateCommentResponseReactionAddressUser.Raw, CommonApi.CreateCommentResponseReactionAddressUser>;
export declare namespace CreateCommentResponseReactionAddressUser {
    interface Raw {
        id?: number | null;
        email?: string | null;
        isAdmin?: boolean | null;
        disableRichText?: boolean | null;
        emailVerified?: boolean | null;
        selected_community_id?: string | null;
        emailNotificationInterval?: CreateCommentResponseReactionAddressUserEmailNotificationInterval.Raw | null;
        promotional_emails_enabled?: boolean | null;
        is_welcome_onboard_flow_complete?: boolean | null;
        profile: CreateCommentResponseReactionAddressUserProfile.Raw;
        ProfileTags?: CreateCommentResponseReactionAddressUserProfileTagsItem.Raw[] | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}