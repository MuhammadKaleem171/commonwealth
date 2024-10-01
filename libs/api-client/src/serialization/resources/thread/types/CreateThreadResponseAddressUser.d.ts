/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateThreadResponseAddressUserEmailNotificationInterval } from "./CreateThreadResponseAddressUserEmailNotificationInterval";
import { CreateThreadResponseAddressUserProfile } from "./CreateThreadResponseAddressUserProfile";
import { CreateThreadResponseAddressUserProfileTagsItem } from "./CreateThreadResponseAddressUserProfileTagsItem";
export declare const CreateThreadResponseAddressUser: core.serialization.ObjectSchema<serializers.CreateThreadResponseAddressUser.Raw, CommonApi.CreateThreadResponseAddressUser>;
export declare namespace CreateThreadResponseAddressUser {
    interface Raw {
        id?: number | null;
        email?: string | null;
        isAdmin?: boolean | null;
        disableRichText?: boolean | null;
        emailVerified?: boolean | null;
        selected_community_id?: string | null;
        emailNotificationInterval?: CreateThreadResponseAddressUserEmailNotificationInterval.Raw | null;
        promotional_emails_enabled?: boolean | null;
        is_welcome_onboard_flow_complete?: boolean | null;
        profile: CreateThreadResponseAddressUserProfile.Raw;
        ProfileTags?: CreateThreadResponseAddressUserProfileTagsItem.Raw[] | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}