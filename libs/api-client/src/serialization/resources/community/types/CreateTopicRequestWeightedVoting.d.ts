/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateTopicRequestWeightedVoting: core.serialization.Schema<serializers.CreateTopicRequestWeightedVoting.Raw, CommonApi.CreateTopicRequestWeightedVoting>;
export declare namespace CreateTopicRequestWeightedVoting {
    type Raw = "stake" | "erc20";
}