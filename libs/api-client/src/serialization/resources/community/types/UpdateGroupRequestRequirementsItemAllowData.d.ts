/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const UpdateGroupRequestRequirementsItemAllowData: core.serialization.ObjectSchema<
  serializers.UpdateGroupRequestRequirementsItemAllowData.Raw,
  CommonApi.UpdateGroupRequestRequirementsItemAllowData
>;
export declare namespace UpdateGroupRequestRequirementsItemAllowData {
  interface Raw {
    allow: string[];
  }
}
