/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateCommunityResponseGroupsItemRequirementsItemAllowData: core.serialization.ObjectSchema<serializers.UpdateCommunityResponseGroupsItemRequirementsItemAllowData.Raw, CommonApi.UpdateCommunityResponseGroupsItemRequirementsItemAllowData>;
export declare namespace UpdateCommunityResponseGroupsItemRequirementsItemAllowData {
    interface Raw {
        allow: string[];
    }
}