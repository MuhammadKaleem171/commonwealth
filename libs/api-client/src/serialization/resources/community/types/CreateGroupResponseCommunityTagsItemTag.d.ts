/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateGroupResponseCommunityTagsItemTag: core.serialization.ObjectSchema<serializers.CreateGroupResponseCommunityTagsItemTag.Raw, CommonApi.CreateGroupResponseCommunityTagsItemTag>;
export declare namespace CreateGroupResponseCommunityTagsItemTag {
    interface Raw {
        id?: number | null;
        name: string;
    }
}