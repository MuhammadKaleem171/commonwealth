/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateCommunityRequestDefaultPage: core.serialization.Schema<serializers.UpdateCommunityRequestDefaultPage.Raw, CommonApi.UpdateCommunityRequestDefaultPage>;
export declare namespace UpdateCommunityRequestDefaultPage {
    type Raw = "default_all_discussions_view" | "default_summary_view" | "homepage";
}
