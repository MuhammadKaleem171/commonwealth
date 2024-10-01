/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateCommentResponseThreadAddressUserProfileTagsItem: core.serialization.ObjectSchema<serializers.CreateCommentResponseThreadAddressUserProfileTagsItem.Raw, CommonApi.CreateCommentResponseThreadAddressUserProfileTagsItem>;
export declare namespace CreateCommentResponseThreadAddressUserProfileTagsItem {
    interface Raw {
        user_id: number;
        tag_id: number;
        created_at?: string | null;
        updated_at?: string | null;
    }
}