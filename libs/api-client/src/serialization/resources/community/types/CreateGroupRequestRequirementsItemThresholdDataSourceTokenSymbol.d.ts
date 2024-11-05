/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const CreateGroupRequestRequirementsItemThresholdDataSourceTokenSymbol: core.serialization.ObjectSchema<
  serializers.CreateGroupRequestRequirementsItemThresholdDataSourceTokenSymbol.Raw,
  CommonApi.CreateGroupRequestRequirementsItemThresholdDataSourceTokenSymbol
>;
export declare namespace CreateGroupRequestRequirementsItemThresholdDataSourceTokenSymbol {
  interface Raw {
    source_type: 'cosmos_native';
    cosmos_chain_id: string;
    token_symbol: string;
  }
}
