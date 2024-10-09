/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSource } from './GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSource';

export declare const GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData: core.serialization.ObjectSchema<
  serializers.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData.Raw,
  CommonApi.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData
>;
export declare namespace GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData {
  interface Raw {
    threshold: string;
    source: GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSource.Raw;
  }
}
