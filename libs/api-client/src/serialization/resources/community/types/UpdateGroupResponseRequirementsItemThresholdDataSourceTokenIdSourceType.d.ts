/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType: core.serialization.Schema<serializers.UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType.Raw, CommonApi.UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType>;
export declare namespace UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType {
    type Raw = "erc20" | "erc721" | "erc1155" | "spl";
}