/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateGroupRequestRequirementsItemAllow } from './CreateGroupRequestRequirementsItemAllow';
import { CreateGroupRequestRequirementsItemThreshold } from './CreateGroupRequestRequirementsItemThreshold';
export declare const CreateGroupRequestRequirementsItem: core.serialization.Schema<
  serializers.CreateGroupRequestRequirementsItem.Raw,
  CommonApi.CreateGroupRequestRequirementsItem
>;
export declare namespace CreateGroupRequestRequirementsItem {
  type Raw =
    | CreateGroupRequestRequirementsItem.Threshold
    | CreateGroupRequestRequirementsItem.Allow;
  interface Threshold extends CreateGroupRequestRequirementsItemThreshold.Raw {
    rule: 'threshold';
  }
  interface Allow extends CreateGroupRequestRequirementsItemAllow.Raw {
    rule: 'allow';
  }
}
