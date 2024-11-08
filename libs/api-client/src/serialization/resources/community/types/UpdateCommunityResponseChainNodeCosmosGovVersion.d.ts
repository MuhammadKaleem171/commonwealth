/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const UpdateCommunityResponseChainNodeCosmosGovVersion: core.serialization.Schema<
  serializers.UpdateCommunityResponseChainNodeCosmosGovVersion.Raw,
  CommonApi.UpdateCommunityResponseChainNodeCosmosGovVersion
>;
export declare namespace UpdateCommunityResponseChainNodeCosmosGovVersion {
  type Raw =
    | 'v1'
    | 'v1beta1govgen'
    | 'v1beta1'
    | 'v1beta1-attempt-failed'
    | 'v1-attempt-failed';
}
