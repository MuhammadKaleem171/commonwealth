/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateCommunityRequestChainNodeHealth: core.serialization.Schema<serializers.UpdateCommunityRequestChainNodeHealth.Raw, CommonApi.UpdateCommunityRequestChainNodeHealth>;
export declare namespace UpdateCommunityRequestChainNodeHealth {
    type Raw = "failed" | "healthy";
}