/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSourceOne: core.serialization.ObjectSchema<serializers.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSourceOne.Raw, CommonApi.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSourceOne>;
export declare namespace GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSourceOne {
    interface Raw {
        source_type: "eth_native";
        evm_chain_id: number;
    }
}
