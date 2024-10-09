/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceOne } from './UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceOne';
import { UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceThree } from './UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceThree';
import { UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceTokenId } from './UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceTokenId';
import { UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceTokenSymbol } from './UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceTokenSymbol';

export declare const UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSource: core.serialization.Schema<
  serializers.UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSource.Raw,
  CommonApi.UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSource
>;
export declare namespace UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSource {
  type Raw =
    | UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceTokenId.Raw
    | UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceOne.Raw
    | UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceTokenSymbol.Raw
    | UpdateCommunityResponseGroupsItemRequirementsItemThresholdDataSourceThree.Raw;
}
