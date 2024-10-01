/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommunityResponseGroupsItemMetadata } from "./UpdateCommunityResponseGroupsItemMetadata";
import { UpdateCommunityResponseGroupsItemRequirementsItem } from "./UpdateCommunityResponseGroupsItemRequirementsItem";
export declare const UpdateCommunityResponseGroupsItem: core.serialization.ObjectSchema<serializers.UpdateCommunityResponseGroupsItem.Raw, CommonApi.UpdateCommunityResponseGroupsItem>;
export declare namespace UpdateCommunityResponseGroupsItem {
    interface Raw {
        id?: number | null;
        community_id: string;
        metadata: UpdateCommunityResponseGroupsItemMetadata.Raw;
        requirements: UpdateCommunityResponseGroupsItemRequirementsItem.Raw[];
        is_system_managed?: boolean | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}