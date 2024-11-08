/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateGroupRequestRequirementsItemThresholdDataSourceThreeSourceType } from './CreateGroupRequestRequirementsItemThresholdDataSourceThreeSourceType';
export declare const CreateGroupRequestRequirementsItemThresholdDataSourceThree: core.serialization.ObjectSchema<
  serializers.CreateGroupRequestRequirementsItemThresholdDataSourceThree.Raw,
  CommonApi.CreateGroupRequestRequirementsItemThresholdDataSourceThree
>;
export declare namespace CreateGroupRequestRequirementsItemThresholdDataSourceThree {
  interface Raw {
    source_type: CreateGroupRequestRequirementsItemThresholdDataSourceThreeSourceType.Raw;
    cosmos_chain_id: string;
    contract_address: string;
  }
}
