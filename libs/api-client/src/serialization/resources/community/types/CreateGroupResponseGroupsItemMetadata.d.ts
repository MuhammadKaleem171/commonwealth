/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateGroupResponseGroupsItemMetadata: core.serialization.ObjectSchema<serializers.CreateGroupResponseGroupsItemMetadata.Raw, CommonApi.CreateGroupResponseGroupsItemMetadata>;
export declare namespace CreateGroupResponseGroupsItemMetadata {
    interface Raw {
        name: string;
        description: string;
        required_requirements?: number | null;
        membership_ttl?: number | null;
    }
}
