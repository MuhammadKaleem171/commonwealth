/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommunityRequestCommunityTagsItemTag } from "./UpdateCommunityRequestCommunityTagsItemTag";
export declare const UpdateCommunityRequestCommunityTagsItem: core.serialization.ObjectSchema<serializers.UpdateCommunityRequestCommunityTagsItem.Raw, CommonApi.UpdateCommunityRequestCommunityTagsItem>;
export declare namespace UpdateCommunityRequestCommunityTagsItem {
    interface Raw {
        community_id: string;
        tag_id: number;
        Tag?: UpdateCommunityRequestCommunityTagsItemTag.Raw | null;
    }
}