/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceTokenIdSourceType: core.serialization.Schema<
  serializers.CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceTokenIdSourceType.Raw,
  CommonApi.CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceTokenIdSourceType
>;
export declare namespace CreateCommunityResponseCommunityGroupsItemRequirementsItemThresholdDataSourceTokenIdSourceType {
  type Raw = 'erc20' | 'erc721' | 'erc1155' | 'spl';
}
