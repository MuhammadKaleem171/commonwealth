/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateCommunityResponseChainNodeBalanceType: core.serialization.Schema<serializers.UpdateCommunityResponseChainNodeBalanceType.Raw, CommonApi.UpdateCommunityResponseChainNodeBalanceType>;
export declare namespace UpdateCommunityResponseChainNodeBalanceType {
    type Raw = "terra" | "ethereum" | "solana" | "cosmos" | "near" | "substrate";
}