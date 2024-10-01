/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateThreadResponseCollaboratorsItemUserProfileTagsItem: core.serialization.ObjectSchema<serializers.UpdateThreadResponseCollaboratorsItemUserProfileTagsItem.Raw, CommonApi.UpdateThreadResponseCollaboratorsItemUserProfileTagsItem>;
export declare namespace UpdateThreadResponseCollaboratorsItemUserProfileTagsItem {
    interface Raw {
        user_id: number;
        tag_id: number;
        created_at?: string | null;
        updated_at?: string | null;
    }
}