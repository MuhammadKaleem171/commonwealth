/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateCommunityResponseTopicsItemContestTopicsItem: core.serialization.ObjectSchema<serializers.UpdateCommunityResponseTopicsItemContestTopicsItem.Raw, CommonApi.UpdateCommunityResponseTopicsItemContestTopicsItem>;
export declare namespace UpdateCommunityResponseTopicsItemContestTopicsItem {
    interface Raw {
        contest_address: string;
        topic_id: number;
        created_at: string;
    }
}
