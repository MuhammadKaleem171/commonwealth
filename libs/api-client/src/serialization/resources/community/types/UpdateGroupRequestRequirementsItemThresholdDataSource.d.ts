/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateGroupRequestRequirementsItemThresholdDataSourceTokenId } from "./UpdateGroupRequestRequirementsItemThresholdDataSourceTokenId";
import { UpdateGroupRequestRequirementsItemThresholdDataSourceOne } from "./UpdateGroupRequestRequirementsItemThresholdDataSourceOne";
import { UpdateGroupRequestRequirementsItemThresholdDataSourceTokenSymbol } from "./UpdateGroupRequestRequirementsItemThresholdDataSourceTokenSymbol";
import { UpdateGroupRequestRequirementsItemThresholdDataSourceThree } from "./UpdateGroupRequestRequirementsItemThresholdDataSourceThree";
export declare const UpdateGroupRequestRequirementsItemThresholdDataSource: core.serialization.Schema<serializers.UpdateGroupRequestRequirementsItemThresholdDataSource.Raw, CommonApi.UpdateGroupRequestRequirementsItemThresholdDataSource>;
export declare namespace UpdateGroupRequestRequirementsItemThresholdDataSource {
    type Raw = UpdateGroupRequestRequirementsItemThresholdDataSourceTokenId.Raw | UpdateGroupRequestRequirementsItemThresholdDataSourceOne.Raw | UpdateGroupRequestRequirementsItemThresholdDataSourceTokenSymbol.Raw | UpdateGroupRequestRequirementsItemThresholdDataSourceThree.Raw;
}