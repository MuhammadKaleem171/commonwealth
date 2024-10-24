/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const GetCommentsResponseResultsItemThreadAddressRole: core.serialization.Schema<
  serializers.GetCommentsResponseResultsItemThreadAddressRole.Raw,
  CommonApi.GetCommentsResponseResultsItemThreadAddressRole
>;
export declare namespace GetCommentsResponseResultsItemThreadAddressRole {
  type Raw = 'admin' | 'moderator' | 'member';
}
