/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateGroupRequestRequirementsItemThresholdDataSourceThreeSourceType } from "./UpdateGroupRequestRequirementsItemThresholdDataSourceThreeSourceType";
export declare const UpdateGroupRequestRequirementsItemThresholdDataSourceThree: core.serialization.ObjectSchema<serializers.UpdateGroupRequestRequirementsItemThresholdDataSourceThree.Raw, CommonApi.UpdateGroupRequestRequirementsItemThresholdDataSourceThree>;
export declare namespace UpdateGroupRequestRequirementsItemThresholdDataSourceThree {
    interface Raw {
        source_type: UpdateGroupRequestRequirementsItemThresholdDataSourceThreeSourceType.Raw;
        cosmos_chain_id: string;
        contract_address: string;
    }
}