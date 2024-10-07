/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceThreeSourceType } from "./CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceThreeSourceType";
export declare const CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceThree: core.serialization.ObjectSchema<serializers.CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceThree.Raw, CommonApi.CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceThree>;
export declare namespace CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceThree {
    interface Raw {
        source_type: CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceThreeSourceType.Raw;
        cosmos_chain_id: string;
        contract_address: string;
    }
}
