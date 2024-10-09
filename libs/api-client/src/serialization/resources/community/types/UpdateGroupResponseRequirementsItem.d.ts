/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateGroupResponseRequirementsItemAllow } from './UpdateGroupResponseRequirementsItemAllow';
import { UpdateGroupResponseRequirementsItemThreshold } from './UpdateGroupResponseRequirementsItemThreshold';

export declare const UpdateGroupResponseRequirementsItem: core.serialization.Schema<
  serializers.UpdateGroupResponseRequirementsItem.Raw,
  CommonApi.UpdateGroupResponseRequirementsItem
>;
export declare namespace UpdateGroupResponseRequirementsItem {
  type Raw =
    | UpdateGroupResponseRequirementsItem.Threshold
    | UpdateGroupResponseRequirementsItem.Allow;

  interface Threshold extends UpdateGroupResponseRequirementsItemThreshold.Raw {
    rule: 'threshold';
  }

  interface Allow extends UpdateGroupResponseRequirementsItemAllow.Raw {
    rule: 'allow';
  }
}
